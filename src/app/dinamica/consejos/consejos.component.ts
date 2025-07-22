import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {
  fechaHoraES: string = '';
  fechaHoraUS: string = '';

  ngOnInit(): void {
    this.actualizarFechas();
    setInterval(() => this.actualizarFechas(), 1000);
  }

  actualizarFechas() {
    const ahora = new Date();
    this.fechaHoraES = ahora.toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.fechaHoraUS = ahora.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
}
