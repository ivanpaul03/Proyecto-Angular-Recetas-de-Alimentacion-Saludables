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
  selector: 'app-pescado',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './pescado.component.html',
  styleUrls: ['./pescado.component.css'],
})
export class PescadoComponent {
  recetas: Receta[] = [
    {
      id: 1,
      titulo: 'Salmón al Horno con Costra de Almendras y Mostaza',
      descripcion:
        'Esta receta combina la jugosidad del salmón con una costra crujiente de almendras y un toque de mostaza y miel.',
      imagen: '../../../assets/img/salmoncostra.png',
      video: '../../../assets/videos/salmoncostravideo.mp4',
      opiniones: [],
    },
    {
      id: 2,
      titulo: 'Ceviche de Pescado con Aguacate y Mango',
      descripcion:
        'Este ceviche es una explosión de frescura y sabor tropical, combinando la acidez del limón con la suavidad del aguacate y el dulzor del mango.',
      imagen: '../../../assets/img/cevichedepescado.png',
      video: '../../../assets/videos/cevichedepescadovideo.mp4',
      opiniones: [],
    },
    {
      id: 3,
      titulo: 'Filete de Pescado en Salsa de Coco y Jengibre',
      descripcion:
        'Una receta exótica y reconfortante que fusiona el sabor delicado del pescado con una salsa cremosa de leche de coco y el aroma cálido del jengibre.',
      imagen: '../../../assets/img/filetedepescado.png',
      video: '../../../assets/videos/filetedepescadovideo.mp4',
      opiniones: [],
    },
  ];

  usuarioActual: string = '';
  nuevaOpinion: Opinion = {
    nombre: '',
    rating: 5,
    comentario: '',
  };

  constructor(private authService: AuthService) {
    this.authService.usuario$.subscribe((usuario) => {
      this.usuarioActual = usuario?.user?.usuario || '';
    });
  }

  agregarOpinion(event: Event, recetaId: number) {
    event.preventDefault();

    if (this.nuevaOpinion.comentario.trim() && this.usuarioActual) {
      const receta = this.recetas.find((r) => r.id === recetaId);
      if (receta) {
        receta.opiniones.push({
          nombre: this.usuarioActual,
          rating: this.nuevaOpinion.rating,
          comentario: this.nuevaOpinion.comentario,
        });
      }

      this.nuevaOpinion = {
        nombre: '',
        rating: 5,
        comentario: '',
      };
    }
  }
}