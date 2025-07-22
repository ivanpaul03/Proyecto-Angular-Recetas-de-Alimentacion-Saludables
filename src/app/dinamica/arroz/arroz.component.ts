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
  selector: 'app-arroz',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './arroz.component.html',
  styleUrls: ['./arroz.component.css'],
})
export class ArrozComponent {
  recetas: Receta[] = [
    {
      id: 1,
      titulo: 'Arroz con lentejas y especias',
      descripcion:
        'Un plato tradicional del Medio Oriente que combina arroz y lentejas con cebolla caramelizada y especias como comino y canela.',
      imagen: '../../../assets/img/arrozconlentejas.png',
      video: '../../../assets/videos/arrozconlentejasvideo.mp4',
      opiniones: [],
    },
    {
      id: 2,
      titulo: 'Arroz con espárragos y almendras tostadas',
      descripcion:
        'Un plato ligero y crujiente que combina arroz integral con espárragos salteados y almendras tostadas.',
      imagen: '../../../assets/img/arrozconesparragos.png',
      video: '../../../assets/videos/arrozconesparragosvideo.mp4',
      opiniones: [],
    },
    {
      id: 3,
      titulo: 'Arroz con berenjena y ajo asado',
      descripcion:
        'Un plato sabroso y reconfortante que mezcla arroz con berenjena asada y ajo. Rico en antioxidantes y con un sabor profundo y delicioso.',
      imagen: '../../../assets/img/arrozconberenjena.png',
      video: '../../../assets/videos/arrozconberenjenavideo.mp4',
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