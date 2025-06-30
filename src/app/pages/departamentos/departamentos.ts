import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './departamentos.html',
  styleUrl: './departamentos.css'
})
export class Departamentos {
  constructor(private router: Router) {}
   departamentos = [
    { id: 1, nombre: 'APARTAMENTO 1', precio: '$190,000' },
    { id: 2, nombre: 'APARTAMENTO 2', precio: '$198,000' },
    { id: 3, nombre: 'APARTAMENTO 3', precio: '$210,000' },
  ];
  verDetalle(id: number) {
    this.router.navigate(['/departamento', id]);
  }
}
