import { Component } from '@angular/core';
import { PredicasService } from '../../services/predicas.service';
import { Predica } from '../../models/predica.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {

  // Video destacado: el más reciente del canal
  readonly featuredVideoId = 'xw67awoL2iU';

  valores = [
    { icon: 'fa-bible',           titulo: 'Palabra de Dios', desc: 'La Biblia es nuestra guía, la autoridad final en doctrina y vida cristiana.' },
    { icon: 'fa-pray',            titulo: 'Oración',          desc: 'Creemos en el poder transformador de la oración constante y ferviente.' },
    { icon: 'fa-hands-helping',   titulo: 'Comunidad',        desc: 'Somos una familia unida que se ama, se apoya y crece junta en la fe.' },
    { icon: 'fa-globe',           titulo: 'Misión',           desc: 'El evangelio de Cristo es para toda nación, tribu, lengua y pueblo.' }
  ];

  stats = [
    { num: '10+',  label: 'Años de ministerio' },
    { num: '500+', label: 'Familias impactadas' },
    { num: '200+', label: 'Prédicas en YouTube' },
    { num: '1',    label: 'Dios todopoderoso' }
  ];

  constructor(public predicasService: PredicasService) {}

  get predicas(): Predica[] {
    return this.predicasService.getRecientes(4);
  }

  get cargando(): boolean {
    return this.predicasService.cargando();
  }

  getThumb(id: string): string {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  getWatchUrl(id: string): string {
    return this.predicasService.getYoutubeWatchUrl(id);
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('es-CO', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }
}
