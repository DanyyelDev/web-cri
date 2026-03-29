import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <div class="nf-icon"><i class="fas fa-cross"></i></div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe o fue movida.<br>¡Pero Dios sabe dónde estás!</p>
      <div class="nf-actions">
        <a routerLink="/" class="btn-primary">
          <i class="fas fa-home"></i> Ir al inicio
        </a>
        <a routerLink="/predicas" class="btn-outline">
          <i class="fas fa-play"></i> Ver prédicas
        </a>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: calc(100vh - 80px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 3rem 1.5rem;
      background: linear-gradient(135deg, var(--color-dark), var(--color-primary));
      color: white;
    }
    .nf-icon {
      width: 80px; height: 80px;
      background: rgba(200,169,81,0.15);
      border: 2px solid rgba(200,169,81,0.3);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem; color: var(--color-secondary);
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: 6rem; font-weight: 800;
      color: var(--color-secondary);
      line-height: 1; margin-bottom: 0.5rem;
    }
    h2 { font-size: 1.8rem; margin-bottom: 1rem; }
    p  { color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 2.5rem; }
    .nf-actions {
      display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
    }
    .btn-outline {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.75rem 1.75rem; background: transparent;
      color: white; font-weight: 600; font-size: 0.9rem;
      border-radius: var(--radius-sm); border: 2px solid white;
      transition: var(--transition); text-decoration: none;
      &:hover { background: white; color: var(--color-primary); }
    }
  `]
})
export class NotFoundComponent {}
