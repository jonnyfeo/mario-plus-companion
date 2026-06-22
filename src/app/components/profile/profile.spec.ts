import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { CompanionDataService } from '../../services/companion-data';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  // Inyección del servicio
  private companionDataService = inject(CompanionDataService);

  // Logo para el header
  logoApp = '/assets/logo-mario-plus.png';

  // Datos obtenidos desde el servicio
  usuario = this.companionDataService.getUsuario();
  metricas = this.companionDataService.getMetricas();
  insignias = this.companionDataService.getInsignias();

  // Evento
  verLogro(nombreLogro: string) {
    alert(`Has seleccionado la insignia: ${nombreLogro}`);
  }
}