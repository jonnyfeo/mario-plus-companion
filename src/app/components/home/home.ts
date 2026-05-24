import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common'; // Permite usar *ngFor en el HTML

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor], // Se agrega NgFor para renderizar listas dinámicas
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // =========================
  // DATOS GENERALES DEL HEADER Y HERO
  // =========================

  // Nombre del usuario mostrado en el saludo principal
  nombreUsuario = 'Mario';

  // Texto principal del progreso del usuario
  mensajeProgreso = 'Te faltan 10 rachas para ser Nivel Gold. Explora curiosidades, completa retos y desbloquea contenido exclusivo.';

  // Porcentaje actual de avance
  porcentajeProgreso = 80;

  // Nivel actual del usuario
  nivelUsuario = 'Silver';

  // Texto del panel de progreso
  mensajeNivel = 'Tu progreso actual te acerca al Nivel Gold.';

  // Logo de la aplicación
  logoApp = '/assets/logo-mario-plus.png';

  // =========================
  // TARJETAS DE ACCESOS RÁPIDOS
  // =========================

  accesosRapidos = [
    {
      titulo: 'Curiosidades',
      descripcion: 'Descubre contenido especial del universo Mario.',
      imagen: '/assets/curiosidades-icon.png'
    },
    {
      titulo: 'Reto del Día',
      descripcion: 'Completa desafíos y mejora tu progreso diario.',
      imagen: '/assets/reto-icon.png'
    }
  ];

  // =========================
  // FUNCIÓN DE ACCIÓN
  // =========================

  // Esta función se activa al pulsar botones específicos
  verSeccion(nombreSeccion: string) {
    alert(`Has seleccionado la sección: ${nombreSeccion}`);
  }
}