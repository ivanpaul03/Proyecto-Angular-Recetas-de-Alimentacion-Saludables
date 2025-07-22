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
  selector: 'app-queso',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './queso.component.html',
  styleUrls: ['./queso.component.css'],
})
export class QuesoComponent {
  recetas: Receta[] = [
    {
      id: 1,
      titulo: 'Tacos de Lechuga con Queso y Frijoles Negros',
      descripcion:
        'Tacos saludables utilizando hojas de lechuga en lugar de tortillas, rellenos con queso rallado y frijoles negros.',
      imagen: '../../../assets/img/tacosqueso.png',
      video: '../../../assets/videos/tacosquesovideo.mp4',
      opiniones: [],
    },
    {
      id: 2,
      titulo: 'Champiñones Rellenos de Queso y Espinacas',
      descripcion:
        'Champiñones horneados con un cremoso relleno de queso ricotta y espinacas, perfectos como aperitivo o acompañamiento.',
      imagen: '../../../assets/img/champiñonesrellenos.png',
      video: '../../../assets/videos/champiñonesrellenosvideo.mp4',
      opiniones: [],
    },
    {
      id: 3,
      titulo: 'Lasagna de Calabacín con Queso Ricotta',
      descripcion:
        'Una lasaña ligera donde las láminas de pasta son sustituidas por calabacín, con un relleno de ricotta y salsa de tomate natural.',
      imagen: '../../../assets/img/lasagnacalabacin.png',
      video: '../../../assets/videos/lasagnacalabacinvideo.mp4',
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