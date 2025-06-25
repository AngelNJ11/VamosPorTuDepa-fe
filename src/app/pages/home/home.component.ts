import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  departamentos = [
    { nombre: 'Departamento 1', imagen: 'assets/imagen1.webp', descripcion: 'Precio especial por fiestas 🎉' },
    { nombre: 'Departamento 2', imagen: 'assets/imagen2.webp', descripcion: 'Aprovecha esta oferta navideña 🏠' },
    { nombre: 'Departamento 3', imagen: 'assets/imagen3.jpg', descripcion: 'Tu nuevo hogar te espera ✨' }
  ];
}
