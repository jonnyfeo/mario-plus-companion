import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanionDataService {

  // =========================
  // DATOS GENERALES DEL USUARIO
  // =========================

  private usuario = {
    nombreJugador: 'Mario',
    nombreUsuario: '@mario.player',
    correoUsuario: 'mario@nintendo.com',
    estadoUsuario: 'Activo',
    miembroDesde: '2026',
    avatarUrl: '/assets/avatar-mario.png',
    nivelActual: 'Silver',
    progresoNivel: 72,
    mensajeNivel: 'Te faltan 28% para llegar al Nivel Gold.',
    mensajeProgreso: 'Te faltan 10 rachas para ser Nivel Gold. Explora curiosidades, completa retos y desbloquea contenido exclusivo.',
    descripcionJugador: 'Nivel Silver · Explorador del Reino Champiñón · Progreso activo en retos y mundos desbloqueables',
  };

  // =========================
  // MÉTRICAS DEL USUARIO
  // =========================

  private metricas = {
    partidas: 120,
    rachaMaxima: 47,
    mejorMarca: 0.43,
    retosSuperados: 12,
    mundosExplorados: 5
  };

  // =========================
  // INSIGNIAS
  // =========================

  private insignias = [
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
  // MÉTODOS DEL SERVICIO
  // =========================

  getUsuario() {
    return this.usuario;
  }

  getMetricas() {
    return this.metricas;
  }

  getInsignias() {
    return this.insignias;
  }
}