import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  form = { nombre: '', email: '', asunto: '', mensaje: '' };
  enviado = false;
  enviando = false;

  enviar() {
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) return;
    this.enviando = true;
    setTimeout(() => {
      this.enviando = false;
      this.enviado = true;
      this.form = { nombre: '', email: '', asunto: '', mensaje: '' };
    }, 1500);
  }

  horarios = [
    { dia: 'Domingo',         hora: '9:00 AM — 11:00 AM', icon: 'fa-sun' },
    { dia: 'Miércoles',       hora: '7:00 PM',             icon: 'fa-bible' },
    { dia: 'Viernes (Jóvenes)', hora: '7:00 PM',           icon: 'fa-users' }
  ];

  redes = [
    { icon: 'fab fa-youtube',    label: 'YouTube',   url: 'https://www.youtube.com/@IglesiaCristianaC.R.I', color: '#ff0000' },
    { icon: 'fab fa-facebook-f', label: 'Facebook',  url: '#',  color: '#1877f2' },
    { icon: 'fab fa-instagram',  label: 'Instagram', url: '#',  color: '#e1306c' },
    { icon: 'fab fa-whatsapp',   label: 'WhatsApp',  url: '#',  color: '#25d366' }
  ];
}
