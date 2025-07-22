import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any[] = [];
  private inactivityTimer: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/eventos').subscribe({
      next: (data) => {
        console.log('Eventos cargados:', data);
        this.eventos = data;
      },
      error: (err) => console.error('❌ Error cargando eventos:', err)
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.inactivityTimer = setTimeout(() => {
          window.location.href = '/';
        }, 5 * 60 * 1000); // 5 minutos - 5000 5 segundos
      } else {
        clearTimeout(this.inactivityTimer);
      }
    });
  }
}