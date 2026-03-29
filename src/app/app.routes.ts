import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio — Iglesia Cristiana CRI'
  },
  {
    path: 'predicas',
    loadComponent: () =>
      import('./pages/predicas/predicas.component').then(m => m.PredicasComponent),
    title: 'Prédicas — Iglesia Cristiana CRI'
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent),
    title: 'Nosotros — Iglesia Cristiana CRI'
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contacto — Iglesia Cristiana CRI'
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Página no encontrada — Iglesia Cristiana CRI'
  }
];
