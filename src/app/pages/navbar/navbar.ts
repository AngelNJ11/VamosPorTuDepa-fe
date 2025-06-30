import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  constructor(private router: Router) {}
  
  get nombre(): string | null {
    return localStorage.getItem('nombre');
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    this.router.navigate(['/']);
  }
}