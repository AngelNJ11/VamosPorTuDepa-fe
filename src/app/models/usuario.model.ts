export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rol: string;
  estado: string;
  fecha_creado: string;
  fecha_modificacion?: string | null;    
}
