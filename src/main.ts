import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

window.addEventListener('beforeunload', () => {
  const token = localStorage.getItem('token');
  if (token) {
    navigator.sendBeacon('http://localhost:8080/api/usuario/logout');
  }
  localStorage.removeItem('token');
  localStorage.removeItem('nombre');
});
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
