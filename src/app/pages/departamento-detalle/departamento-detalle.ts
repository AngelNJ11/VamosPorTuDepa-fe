import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamento-detalle',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './departamento-detalle.html',
  styleUrl: './departamento-detalle.css'
})
export class DepartamentoDetalle {
   id!: number;
  departamento: any;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.departamento = {
      id: this.id,
      titulo: 'Moderno Departamento en Miraflores',
      descripcion: 'Amplio departamento con excelente vista y acabados de lujo.',
      direccion: 'Av. Larco 123, Miraflores',
      distrito: 'Miraflores',
      numHabitaciones: 3,
      numBanos: 2,
      precio: 250000,
      tipo: 'VENTA',
      estado: 'DISPONIBLE',
      latitud: -12.121212,
      longitud: -77.030303,
      imagenPrincipal: 'https://via.placeholder.com/900x300',
      fechaCreacion: new Date(),
    };
  }
  constructor(private route: ActivatedRoute) {}
}
