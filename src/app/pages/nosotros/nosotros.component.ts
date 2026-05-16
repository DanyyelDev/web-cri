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
    { num: '01', nombre: 'Niños y Jóvenes',  desc: 'Formando la próxima generación en los valores del Reino. Discípulos jóvenes, raíces profundas.' },
    { num: '02', nombre: 'Familias',          desc: 'Fortaleciendo matrimonios y hogares desde la Palabra. Restauración como vocación pastoral.' },
    { num: '03', nombre: 'Acción Social',     desc: 'Llevando el amor de Cristo a los más vulnerables. Manos extendidas, fronteras disueltas.' },
    { num: '04', nombre: 'Alabanza',          desc: 'Adoradores que llevan la presencia de Dios en cada culto. Liturgia como ofrenda viva.' },
    { num: '05', nombre: 'Discipulado',       desc: 'Grupos pequeños donde crecemos juntos. La fe se aprende en comunidad, no en aislamiento.' },
    { num: '06', nombre: 'Misiones',          desc: 'Compartiendo el evangelio más allá de nuestras fronteras. El mundo, nuestra parroquia.' },
  ];

  pastores = [
    {
      nombre: 'Pr. Eduar Castañeda',
      rol: 'Pastor principal · Fundador',
      bio: 'Pastor desde 1998. Su predicación combina rigor teológico con cercanía pastoral. Casado con Ruth, padre de tres y abuelo de cinco.',
      foto: 'assets/pastor-eduar.jpg'
    },
    {
      nombre: 'Pra. Ruth Castañeda',
      rol: 'Co-pastora · Ministerio de Mujeres',
      bio: 'Co-fundadora de la iglesia y referente en el ministerio de mujeres. Maestra de la Palabra con un don particular para la consejería.',
      foto: 'assets/pastor-ruth.jpg'
    }
  ];
}
