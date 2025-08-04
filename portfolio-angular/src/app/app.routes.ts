import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component'; 
import { ProjectsComponent } from './features/projects/projects.component'; 
import { ContactComponent } from './features/contact/contact.component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Jesy Gomez - Portafolio' }, 
  { path: 'projects', component: ProjectsComponent, title: 'Mis Proyectos' }, 
  { path: 'contact', component: ContactComponent, title: 'Contacto' }, 
  // Agrega una ruta wildcard para manejar rutas no encontradas (opcional pero recomendado)
  { path: '**', redirectTo: '' } // Redirige a la página de inicio si la ruta no existe
];