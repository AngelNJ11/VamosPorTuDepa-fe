  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Auth } from '../models/auth.model';
  import { Usuario } from '../models/usuario.model';
  import { RegisterRequest } from '../models/register-request.model';
  import { tap, map } from 'rxjs/operators';
  import { HttpResponse } from '@angular/common/http';


  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private baseUrl = 'http://localhost:8080/api/usuario';

    constructor(private http: HttpClient) {}

login(auth: Auth): Observable<{ usuario: Usuario; mensaje: string }> {
  return this.http.post<{ usuario: Usuario; mensaje: string; token: string }>(
    `${this.baseUrl}/login`,
    auth
  ).pipe(
    tap((response) => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('nombre', response.usuario.nombre);
    }),
    map(response => response)
  );
}
      register(data: RegisterRequest): Observable<any> {
      return this.http.post(`${this.baseUrl}/signup`, data);
    }
    
isTokenExpired(): boolean {
  const token = localStorage.getItem('token');
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000; 
    return Date.now() > exp;
  } catch {
    return true; 
  }
}
estaAutenticado(): boolean {
  return !this.isTokenExpired();
}
}
  