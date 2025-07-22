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
  selector: 'app-huevo',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './huevo.component.html',
  styleUrls: ['./huevo.component.css'],
})
export class HuevoComponent {
  recetas: Receta[] = [
    {
      id: 1,
      titulo: 'Tostadas de Aguacate con Huevo Poché',
      descripcion:
        'Un desayuno balanceado con grasas saludables y proteínas, ideal para empezar el día con energía.',
      imagen: '../../../assets/img/tostadahuevo.png',
      video: '../../../assets/videos/tostadahuevovideo.mp4',
      opiniones: [],
    },
    {
      id: 2,
      titulo: 'Huevos Revueltos con Brócoli y Queso Feta',
      descripcion:
        'Un revuelto nutritivo con brócoli al vapor y queso feta, perfecto para un desayuno lleno de proteínas y fibra.',
      imagen: '../../../assets/img/huevosrevueltos.png',
      video: '../../../assets/videos/huevosrevueltosvideo.mp4',
      opiniones: [],
    },
    {
      id: 3,
      titulo: 'Tortilla de Batata y Espinaca',
      descripcion:
        'Una tortilla ligera y dulce con batata asada y espinaca, perfecta para cualquier comida del día.',
      imagen: '../../../assets/img/tortillabatata.png',
      video: '../../../assets/videos/tortillabatatavideo.mp4',
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