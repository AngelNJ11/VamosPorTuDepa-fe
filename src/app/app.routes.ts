import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component'; 
import { Departamentos } from './pages/departamentos/departamentos';
import {DepartamentoDetalle} from './pages/departamento-detalle/departamento-detalle'
import{Contactanos} from './pages/contactanos/contactanos'


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'departamentos', component: Departamentos },
  { path: 'departamento/:id', component: DepartamentoDetalle },
  { path: 'contactanos', component: Contactanos }
];
