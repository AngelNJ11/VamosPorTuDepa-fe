import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';
import { Usuario } from '../models/usuario.model';
import { RegisterRequest } from '../models/register-request.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) {}

  login(auth: Auth): Observable<{ usuario: Usuario; mensaje: string; token: string }> {
    return this.http.post<{ usuario: Usuario; mensaje: string; token: string }>(
      `${this.baseUrl}/login`,
      auth
    );
  }
    register(data: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
}