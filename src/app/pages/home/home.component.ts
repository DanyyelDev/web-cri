import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { PredicasService } from '../../services/predicas.service';
import { Predica } from '../../models/predica.model';

const FALLBACK: Predica[] = [
  {
    id: 'fb1', videoId: 'xw67awoL2iU',
    titulo: 'El Señor no pudo dormir',
    pastor: 'Pr. Eduar Castañeda',
    fecha: '2026-05-10',
    descripcion: 'Una meditación sobre la pasión de Cristo y cómo el amor de Dios se mantiene vigilante cuando el mundo duerme.',
    categoria: 'Palabra de Poder',
    thumbnail: 'https://img.youtube.com/vi/xw67awoL2iU/hqdefault.jpg',
    duracion: '42:18',
  },
  {
    id: 'fb2', videoId: 'xw67awoL2iU',
    titulo: 'Oración que rompe las cadenas',
    pastor: 'Pr. Eduar y Ruth Castañeda',
    fecha: '2026-05-12',
    descripcion: 'Cuarta parte de la serie sobre oración y ayuno. La libertad espiritual comienza con un clamor sincero.',
    categoria: 'Reunión de Oración',
    thumbnail: 'https://img.youtube.com/vi/xw67awoL2iU/hqdefault.jpg',
    duracion: '38:42',
  },
  {
    id: 'fb3', videoId: 'xw67awoL2iU',
    titulo: 'Despiertos por el Señor',
    pastor: 'Pr. Eduar Castañeda',
    fecha: '2026-05-08',
    descripcion: 'Vigilia de oración y la cena del Señor: una invitación a permanecer despiertos en tiempos confusos.',
    categoria: 'Escuela de Teología',
    thumbnail: 'https://img.youtube.com/vi/xw67awoL2iU/hqdefault.jpg',
    duracion: '55:02',
  },
  {
    id: 'fb4', videoId: 'xw67awoL2iU',
    titulo: 'Si logro oírlo, lo conoceré',
    pastor: 'Pra. Ruth Castañeda',
    fecha: '2026-05-05',
    descripcion: 'El silencio como disciplina espiritual. Aprender a discernir la voz de Dios entre el ruido del mundo.',
    categoria: 'Devocionales',
    thumbnail: 'https://img.youtube.com/vi/xw67awoL2iU/hqdefault.jpg',
    duracion: '29:14',
  },
  {
    id: 'fb5', videoId: 'xw67awoL2iU',
    titulo: 'Déjame ver a Dios',
    pastor: 'Pr. Eduar Castañeda',
    fecha: '2026-05-02',
    descripcion: 'El anhelo profundo del corazón humano por contemplar la gloria divina, según Moisés en Éxodo 33.',
    categoria: 'Palabra de Poder',
    thumbnail: 'https://img.youtube.com/vi/xw67awoL2iU/hqdefault.jpg',
    duracion: '47:30',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {

  readonly featuredVideoId = 'xw67awoL2iU';
  readonly totalPredicas   = 104;

  // Visible desde el primer render con el fallback
  predicas: Predica[] = [...FALLBACK];

  stats = [
    { num: '10+',  label: 'Años de ministerio'  },
    { num: '500+', label: 'Familias impactadas'  },
    { num: '200+', label: 'Prédicas en YouTube'  },
    { num: '1',    label: 'Dios todopoderoso'    },
  ];

  private sub!: Subscription;

  constructor(public predicasService: PredicasService) {}

  ngOnInit(): void {
    // Si ya hay datos en el servicio (cargados antes), usarlos de inmediato
    const yaCargas = this.predicasService.predicas();
    if (yaCargas.length > 0) {
      this.predicas = yaCargas.slice(0, 5);
    }

    // Suscribirse al Observable para recibir datos cuando lleguen
    this.sub = this.predicasService.predicas$
      .pipe(take(1))
      .subscribe(lista => {
        if (lista.length > 0) {
          this.predicas = lista.slice(0, 5);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  getThumb(id: string): string {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }

  getWatchUrl(id: string): string {
    return this.predicasService.getYoutubeWatchUrl(id);
  }

  formatDate(d: string): string {
    try {
      return new Date(d + 'T12:00:00')
        .toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' })
        .toUpperCase();
    } catch {
      return d;
    }
  }
}
