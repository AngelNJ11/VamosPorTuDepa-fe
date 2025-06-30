import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar implements OnInit  {
  mensaje = '';

  constructor(private router: Router, private authService: AuthService,
    private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
    setInterval(() => {
      if (this.authService.isTokenExpired() && !this.mensaje) {
        this.cerrarSesion(true);
      }
    }, 60000); 
  }


  get sesionActiva(): boolean {
    return !this.authService.isTokenExpired();
  }

  get nombre(): string | null {
    return localStorage.getItem('nombre');
  }

cerrarSesion(expirado: boolean = false): void {
  localStorage.removeItem('token');
  localStorage.removeItem('nombre');
  this.router.navigate(['/']);
  this.cdr.detectChanges();
}

}
