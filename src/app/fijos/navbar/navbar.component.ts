import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  usuario$: Observable<any>;

  constructor(private authService: AuthService) {
    this.usuario$ = this.authService.usuario$;
  }

  ngOnInit() {}

  cerrarSesion() {
    this.authService.logout();
  }
}