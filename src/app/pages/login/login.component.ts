import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

login() {
  const datos: Auth = {
    email: this.email,
    contrasena: this.password
  };

  this.authService.login(datos).subscribe({
    next: res => {
      console.log('Login OK', res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('nombre', res.usuario.nombre);
      this.router.navigate(['/']);
    },
    error: err => {
      console.error(err);
      this.error = 'Credenciales incorrectas o error del servidor.';
    }
  });
}
}
