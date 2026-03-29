import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nosotros',
    imports: [CommonModule, RouterLink],
    templateUrl: './nosotros.component.html',
    styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  ministerios = [
    { icon: 'fa-child',           nombre: 'Niños y Jóvenes',  desc: 'Formando la próxima generación en los valores del Reino de Dios.' },
    { icon: 'fa-heart',           nombre: 'Familias',          desc: 'Fortaleciendo matrimonios y hogares desde la Palabra de Dios.' },
    { icon: 'fa-hands',           nombre: 'Acción Social',     desc: 'Llevando el amor de Cristo a los más vulnerables de nuestra comunidad.' },
    { icon: 'fa-music',           nombre: 'Alabanza',          desc: 'Adoradores que llevan la presencia de Dios en cada culto.' },
    { icon: 'fa-book',            nombre: 'Discipulado',       desc: 'Grupos pequeños donde crecemos juntos en el conocimiento de Dios.' },
    { icon: 'fa-globe-americas',  nombre: 'Misiones',          desc: 'Compartiendo el evangelio más allá de nuestras fronteras.' }
  ];

  valores = [
    { num: '01', titulo: 'Biblia',      desc: 'La Palabra de Dios es la autoridad suprema e infalible en todas las áreas de la vida.' },
    { num: '02', titulo: 'Oración',     desc: 'Creemos en el poder de la oración como comunicación constante con Dios.' },
    { num: '03', titulo: 'Santidad',    desc: 'Vivimos apartados para Dios, reflejando su carácter en cada decisión.' },
    { num: '04', titulo: 'Evangelismo', desc: 'Somos llamados a compartir las buenas nuevas de salvación con todo el mundo.' }
  ];
}
