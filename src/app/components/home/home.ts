import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { CompanionDataService } from '../../services/companion-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Inyección del servicio
  private companionDataService = inject(CompanionDataService);

  // Logo
  logoApp = '/assets/logo-mario-plus.png';

  // Datos del usuario obtenidos desde el servicio
  usuario = this.companionDataService.getUsuario();

  // Métricas obtenidas desde el servicio
  metricas = this.companionDataService.getMetricas();

  // Accesos rápidos
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

  verSeccion(nombreSeccion: string) {
    alert(`Has seleccionado la sección: ${nombreSeccion}`);
  }
}