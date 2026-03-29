import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './pages/home/home.component';
import { PredicasComponent } from './pages/predicas/predicas.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '',          component: HomeComponent,     title: 'Inicio — Iglesia Cristiana CRI' },
  { path: 'predicas',  component: PredicasComponent, title: 'Prédicas — Iglesia Cristiana CRI' },
  { path: 'nosotros',  component: NosotrosComponent, title: 'Nosotros — Iglesia Cristiana CRI' },
  { path: 'contacto',  component: ContactoComponent, title: 'Contacto — Iglesia Cristiana CRI' },
  { path: '**',        component: NotFoundComponent, title: 'No encontrado — Iglesia Cristiana CRI' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
