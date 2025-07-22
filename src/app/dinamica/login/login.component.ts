import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: res => {
        alert('¡Bienvenido a todas las funciones de IvanFit Recipes!');
        console.log('Login exitoso:', res);
        this.router.navigate(['/']);
      },
      error: err => {
        this.errorMessage = 'Usuario o contraseña incorrectos.';
      }
    });
  }
}