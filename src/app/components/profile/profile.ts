import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common'; // Permite usar *ngFor en el HTML

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, NgFor], // RouterLink para navegar y NgFor para listas dinámicas
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  // =========================
  // DATOS GENERALES DEL PERFIL
  // =========================
// Property binding: logo usado en la barra superior
logoApp = '/assets/logo-mario-plus.png';

  // Property binding: ruta dinámica del avatar
  avatarUrl = '/assets/avatar-mario.png';

  // Interpolación: nombre principal del jugador
  nombreJugador = 'Mario';

  // Interpolación: texto descriptivo del perfil
  descripcionJugador = 'Nivel Silver · Explorador del Reino Champiñón · Progreso activo en retos y mundos desbloqueables';

  // Interpolación: nivel actual
  nivelActual = 'Silver';

  // Property binding: porcentaje visual del progreso
  progresoNivel = 72;

  // Interpolación: mensaje de ayuda del progreso
  mensajeNivel = 'Te faltan 28% para llegar al Nivel Gold.';

  // =========================
  // INFORMACIÓN DEL USUARIO
  // =========================

  nombreUsuario = '@mario.player';
  correoUsuario = 'mario@nintendo.com';
  estadoUsuario = 'Activo';
  miembroDesde = '2026';

  // =========================
  // LOGROS / INSIGNIAS
  // =========================

  insignias = [
    {
      nombre: 'Bronze',
      descripcion: 'Primer nivel desbloqueado',
      imagen: '/assets/badge-bronze.png',
      activa: false
    },
    {
      nombre: 'Silver',
      descripcion: 'Nivel actual del jugador',
      imagen: '/assets/badge-silver.png',
      activa: true
    },
    {
      nombre: 'Gold',
      descripcion: 'Próximo objetivo a desbloquear',
      imagen: '/assets/badge-gold.png',
      activa: false
    }
  ];

  // =========================
  // EVENTO
  // =========================

  verLogro(nombreLogro: string) {
    alert(`Has seleccionado la insignia: ${nombreLogro}`);
  }
}