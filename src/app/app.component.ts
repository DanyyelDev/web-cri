import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
    styles: [`
    main {
      min-height: 100vh;
    }
  `],
    standalone: false
})
export class AppComponent implements OnInit {

  private observer!: IntersectionObserver;

  constructor(private router: Router) {}

  ngOnInit() {
    // Scroll-to-top en navegación
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      // Re-inicializar observer tras cambio de ruta
      setTimeout(() => this.initReveal(), 100);
    });

    // Inicializar al cargar
    setTimeout(() => this.initReveal(), 100);
  }

  private initReveal() {
    if (this.observer) this.observer.disconnect();

    const reveal = (el: Element) => el.classList.add('in');

    const els = document.querySelectorAll('.fade-up, .stagger');

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) reveal(e.target); });
    }, { rootMargin: '0px', threshold: 0 });

    els.forEach(el => {
      // Si ya está en el viewport, revelar de inmediato
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 100) {
        reveal(el);
      } else {
        this.observer.observe(el);
      }
    });
  }
}
