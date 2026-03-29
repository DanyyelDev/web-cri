import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Predica } from '../../models/predica.model';

@Component({
    selector: 'app-predica-card',
    imports: [CommonModule],
    templateUrl: './predica-card.component.html',
    styleUrls: ['./predica-card.component.scss']
})
export class PredicaCardComponent {
  @Input() predica!: Predica;
  @Input() mode: 'grid' | 'list' = 'grid';
  @Output() verVideo = new EventEmitter<Predica>();

  get watchUrl() {
    return `https://www.youtube.com/watch?v=${this.predica.videoId}`;
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('es-CO', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  onVerClick(e: Event) {
    e.stopPropagation();
    this.verVideo.emit(this.predica);
  }
}
