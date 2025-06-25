import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  phone = '';
  dob = '';
  password = '';
  confirmPassword = '';

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí podrías hacer la lógica para guardar los datos o enviarlos a un backend
    console.log('Registrando usuario:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      dob: this.dob,
      password: this.password
    });

    alert('¡Registro exitoso!');
  }
}
