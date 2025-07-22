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
  selector: 'app-pollo',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './pollo.component.html',
  styleUrls: ['./pollo.component.css'],
})
export class PolloComponent {
  recetas: Receta[] = [
    {
      id: 1,
      titulo: "Pollo a la plancha con verduras",
      descripcion: "Delicioso pollo a la plancha acompañado de verduras salteadas.",
      imagen: "../../../assets/img/polloverduras.png",
      video: "../../../assets/videos/polloverdurasvideo.mp4",
      opiniones: []
    },
    {
      id: 2,
      titulo: "Ensalada de pollo y aguacate",
      descripcion: "Ensalada fresca con pollo, aguacate y aderezo saludable.",
      imagen: "../../../assets/img/ensaladapolloaguacate.png",
      video: "../../../assets/videos/ensaladapolloaguacatevideo.mp4",
      opiniones: []
    },
    {
      id: 3,
      titulo: "Pollo al curry",
      descripcion: "Receta exótica de pollo al curry con arroz basmati.",
      imagen: "../../../assets/img/polloalcurry.png",
      video: "../../../assets/videos/polloalcurryvideo.mp4",
      opiniones: []
    }
  ];

  usuarioActual: any = null;
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

      this.nuevaOpinion = { nombre: '', rating: 5, comentario: '' };
    }
  }
}