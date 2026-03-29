import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PredicasService } from '../../services/predicas.service';
import { Predica, CategoriaPrediaca } from '../../models/predica.model';
import { PredicaCardComponent } from '../../components/predica-card/predica-card.component';

@Component({
  selector: 'app-predicas',
  standalone: true,
  imports: [CommonModule, FormsModule, PredicaCardComponent],
  templateUrl: './predicas.component.html',
  styleUrls: ['./predicas.component.scss']
})
export class PredicasComponent implements OnInit {

  categorias: CategoriaPrediaca[] = [];

  catActiva  = signal<string>('Todas');
  busqueda   = signal<string>('');
  vistaLista = signal<boolean>(false);

  modalAbierto = signal<boolean>(false);
  predicaModal = signal<Predica | null>(null);

  /** Lista filtrada — se recalcula automáticamente cuando cambian señales */
  filtradas = computed<Predica[]>(() => {
    let res = this.predicasService.predicas();

    if (this.catActiva() !== 'Todas') {
      res = res.filter(p => p.categoria === this.catActiva());
    }

    const q = this.busqueda().trim().toLowerCase();
    if (q) {
      res = res.filter(p =>
        p.titulo.toLowerCase().includes(q)      ||
        p.descripcion.toLowerCase().includes(q) ||
        p.pastor.toLowerCase().includes(q)
      );
    }

    return res;
  });

  constructor(
    public predicasService: PredicasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categorias = this.predicasService.getCategorias();

    this.route.queryParams.subscribe(p => {
      if (p['cat']) this.catActiva.set(p['cat']);
    });
  }

  onBusqueda(val: string) { this.busqueda.set(val); }
  setCat(cat: string)      { this.catActiva.set(cat); }

  limpiar() {
    this.busqueda.set('');
    this.catActiva.set('Todas');
  }

  abrirModal(p: Predica) {
    this.predicaModal.set(p);
    this.modalAbierto.set(true);
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.modalAbierto.set(false);
    this.predicaModal.set(null);
    document.body.style.overflow = '';
  }

  getWatchUrl(id: string) {
    return this.predicasService.getYoutubeWatchUrl(id);
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('es-CO', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  catIconos: Record<string, string> = {
    'Palabra de Poder':       'fa-bible',
    'Conferencia Financiera': 'fa-coins',
    'Devocionales':           'fa-pray',
    'Escuela de Diaconado':   'fa-church',
    'Escuela de Teología':    'fa-graduation-cap',
    'Reunión de Oración':     'fa-hands',
  };

  skeletons = Array(6);
}
