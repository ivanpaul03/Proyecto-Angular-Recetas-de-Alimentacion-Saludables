import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  apellidos: string = '';
  dni: string = '';
  telefono: string = '';
  email: string = '';
  usuario: string = '';
  contrasena: string = '';
  repetirContrasena: string = '';
  tipo: string = 'usuario';

  mensaje: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  toggleMostrarContrasena(event: any) {
    const tipo = event.target.checked ? 'text' : 'password';
    (document.getElementById('contrasena') as HTMLInputElement).type = tipo;
    (document.getElementById('repetirContrasena') as HTMLInputElement).type = tipo;
  }

  onRegister() {
    if (!this.nombre || !this.apellidos || !this.dni || !this.email || !this.usuario || !this.contrasena) {
      this.mensaje = '❌ Por favor, complete todos los campos obligatorios';
      return;
    }

    if (this.contrasena !== this.repetirContrasena) {
      this.mensaje = '❌ Las contraseñas no coinciden';
      return;
    }

    this.isLoading = true;
    this.mensaje = '';

    const nuevoUsuario = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      dni: this.dni,
      telefono: this.telefono,
      email: this.email,
      usuario: this.usuario,
      contrasena: this.contrasena,
      tipo: 'usuario'
    };

    this.http.post('http://localhost:3000/api/usuarios', nuevoUsuario).subscribe({
      next: () => {
        this.mensaje = '✅ Usuario registrado correctamente';
        this.isLoading = false;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      error: (err) => {
        console.error('Error al registrar usuario:', err);
        this.mensaje = err.error?.message || '❌ Ocurrió un error al registrar el usuario';
        this.isLoading = false;
      }
    });
  }
}