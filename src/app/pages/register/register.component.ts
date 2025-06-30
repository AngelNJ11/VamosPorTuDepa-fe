import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../models/register-request.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  lastname = '';
  email = '';
  phone = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const data: RegisterRequest = {
      nombre: this.name,
      apellido: this.lastname,
      email: this.email,
      contrasena1: this.password,
      contrasena2: this.confirmPassword,
      telefono: this.phone
    };

    this.authService.register(data).subscribe({
      next: () => {
        alert('¡Registro exitoso!');
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('Error en registro', err);
        alert('Hubo un error al registrar. Revisa los datos.');
      }
    });
  }
}
