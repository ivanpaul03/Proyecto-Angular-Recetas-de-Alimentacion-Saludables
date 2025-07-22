import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';

interface Opinion {
  nombre: string;
  rating: number;
  comentario: string;
}

interface Receta {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  video: string;
  opiniones: Opinion[];
}

@Component({
  selector: 'app-tomate',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './tomate.component.html',
  styleUrls: ['./tomate.component.css'],
})
export class TomateComponent {
  recetas: Receta[] = [
    {
      id: 1,
      titulo: "Bruschetta de Tomate y Albahaca",
      descripcion: "Un clásico italiano que combina el sabor intenso del tomate con el aroma de la albahaca sobre pan crujiente.",
      imagen: "../../../assets/img/bruschetta.png",
      video: "../../../assets/videos/bruschettavideo.mp4",
      opiniones: []
    },
    {
      id: 2,
      titulo: "Ratatouille Saludable",
      descripcion: "Un platillo francés lleno de verduras y antioxidantes, ideal como acompañamiento o plato principal.",
      imagen: "../../../assets/img/ratatouille.png",
      video: "../../../assets/videos/ratatouillevideo.mp4",
      opiniones: []
    },
    {
      id: 3,
      titulo: "Pimientos Rellenos de Quinoa y Tomate",
      descripcion: "Un plato vegetariano rico en proteínas y fibra, ideal como comida principal.",
      imagen: "../../../assets/img/pimientosrellenos.png",
      video: "../../../assets/videos/pimientosrellenosvideo.mp4",
      opiniones: []
    }
  ];

  usuarioActual: string = '';
  nuevaOpinion: Opinion = {
    nombre: '',
    rating: 5,
    comentario: ''
  };

  constructor(private authService: AuthService) {
    this.authService.usuario$.subscribe(usuario => {
      this.usuarioActual = usuario?.user?.usuario || '';
    });
  }

  agregarOpinion(event: Event, recetaId: number) {
    event.preventDefault();

    if (this.nuevaOpinion.comentario.trim() && this.usuarioActual) {
      const receta = this.recetas.find(r => r.id === recetaId);
      if (receta) {
        receta.opiniones.push({
          nombre: this.usuarioActual,
          rating: this.nuevaOpinion.rating,
          comentario: this.nuevaOpinion.comentario
        });
      }

      this.nuevaOpinion = {
        nombre: '',
        rating: 5,
        comentario: ''
      };
    }
  }
}