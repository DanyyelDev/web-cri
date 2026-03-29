import { Injectable, signal } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Predica, CategoriaPrediaca } from '../models/predica.model';

@Injectable({ providedIn: 'root' })
export class PredicasService {

  private readonly _predicas  = signal<Predica[]>([]);
  private readonly _cargando  = signal<boolean>(false);
  private readonly _error     = signal<boolean>(false);

  readonly predicas  = this._predicas.asReadonly();
  readonly cargando  = this._cargando.asReadonly();
  readonly error     = this._error.asReadonly();

  constructor(private youtube: YoutubeService) {
    this.cargar();
  }

  cargar(): void {
    this._cargando.set(true);
    this._error.set(false);

    this.youtube.fetchAll(20).subscribe({
      next:  list  => { this._predicas.set(list); this._cargando.set(false); },
      error: ()    => { this._error.set(true);    this._cargando.set(false); },
    });
  }

  getCategorias(): CategoriaPrediaca[] {
    return this.youtube.playlists.map(p => p.categoria);
  }

  getAll(): Predica[] {
    return this._predicas();
  }

  /** Devuelve las n prédicas más recientes (ya ordenadas por fecha) */
  getRecientes(n = 4): Predica[] {
    return this._predicas().slice(0, n);
  }

  getYoutubeEmbedUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
  }

  getYoutubeWatchUrl(videoId: string): string {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
}
