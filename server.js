const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "recetasdb",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a la base de datos:", err);
  } else {
    console.log("✅ Conectado a la base de datos MySQL");
  }
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM usuarios WHERE usuario = ?";

  db.query(query, [username], async (err, results) => {
    if (err) {
      console.error("Error en la consulta:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }

    const user = results[0];
    
    try {
      const match = await bcrypt.compare(password, user.contrasena);
      
      if (match) {
        const { contrasena, ...userWithoutPassword } = user;
        res.json({ 
          message: "Login exitoso", 
          user: userWithoutPassword 
        });
      } else {
        res.status(401).json({ error: "Usuario o contraseña incorrectos" });
      }
    } catch (error) {
      console.error("Error al comparar contraseñas:", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  });
});

app.post("/api/usuarios", async (req, res) => {
  const { nombre, apellidos, dni, telefono, email, usuario, contrasena, tipo } =
    req.body;

  if (!nombre || !apellidos || !dni || !email || !usuario || !contrasena) {
    return res.status(400).json({ message: "❌ Faltan campos obligatorios" });
  }

  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const query = `
      INSERT INTO usuarios (nombre, apellidos, dni, telefono, email, usuario, contrasena, tipo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [nombre, apellidos, dni, telefono, email, usuario, hashedPassword, tipo],
      (err, result) => {
        if (err) {
          console.error("❌ Error al insertar usuario:", err);
          return res
            .status(500)
            .json({ message: "❌ Error al registrar el usuario" });
        }

        res.status(201).json({ message: "✅ Usuario registrado correctamente" });
      }
    );
  } catch (err) {
    console.error("❌ Error al encriptar la contraseña:", err);
    res.status(500).json({ message: "❌ Error al registrar el usuario" });
  }
});

app.post('/api/opiniones', (req, res) => {
  const { receta_id, nombre, rating, comentario } = req.body;
  const query = 'INSERT INTO opiniones (receta_id, nombre, rating, comentario) VALUES (?, ?, ?, ?)';
  db.query(query, [receta_id, nombre, rating, comentario], (err, result) => {
    if (err) {
      console.error('Error al guardar la opinión:', err);
      return res.status(500).json({ error: 'Error al guardar la opinión' });
    }
    res.json({ message: 'Opinión guardada correctamente' });
  });
});

app.get("/api/opiniones/:recetaId", (req, res) => {
  const recetaId = req.params.recetaId;

  db.query("SELECT * FROM opiniones WHERE receta_id = ?", [recetaId], (err, results) => {
    if (err) {
      console.error("❌ Error al obtener opiniones:", err);
      return res.status(500).json({ message: "❌ Error al recuperar opiniones" });
    }

    res.json(results);
  });
});

app.get('/api/eventos', (req, res) => {
  db.query('SELECT * FROM eventos', (err, results) => {
    if (err) {
      console.error('❌ Error al obtener eventos:', err);
      return res.status(500).json({ message: '❌ Error al recuperar eventos' });
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Servidor backend corriendo en http://localhost:3000");
});