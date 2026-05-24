import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common'; // NgFor para listas y NgClass para clases dinámicas

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterLink, NgFor, NgClass],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games {

  // =========================
  // DATOS DEL HERO PRINCIPAL
  // =========================
// Property binding: logo de la aplicación usado en la barra superior
logoApp = '/assets/logo-mario-plus.png';
  etiquetaHero = 'Mario+ · Juegos';
  tituloHero = 'Desafíos, minijuegos y progreso';
  descripcionHero = 'Explora sesiones rápidas, supera retos por nivel y desbloquea contenido exclusivo mientras avanzas dentro del universo Mario Bros.';
  nivelRecomendado = 'Medium';
  porcentajeProgreso = 64;
  mensajeProgreso = 'Tienes buen progreso para seguir desbloqueando nuevos retos.';

  // =========================
  // FILTROS
  // =========================

  // Lista de botones de filtro
  filtros = ['All', 'Easy', 'Medium', 'Hard'];

  // Guarda cuál filtro está activo actualmente
  filtroActivo = 'All';

  // =========================
  // LISTA COMPLETA DE JUEGOS
  // =========================

  juegos = [
    {
      nombre: 'Match the Character',
      nivel: 'Easy',
      descripcion: 'Relaciona personajes del universo Mario y pon a prueba tu memoria visual.',
      imagen: '/assets/game-card-1.jpg'
    },
    {
      nombre: 'Coin Rush',
      nivel: 'Medium',
      descripcion: 'Supera una serie de desafíos cortos recolectando monedas y manteniendo la racha.',
      imagen: '/assets/game-card-2.jpg'
    },
    {
      nombre: 'Mario Tennis Challenge',
      nivel: 'Hard',
      descripcion: 'Desafío avanzado con mayor dificultad y recompensa superior al completar objetivos.',
      imagen: '/assets/game-card-3.jpg'
    }
  ];

  // =========================
  // BLOQUE DESTACADO
  // =========================

  destacadoTitulo = 'Reto especial de la semana';
  destacadoTexto = 'Completa este desafío para desbloquear contenido exclusivo, aumentar tu nivel y reforzar tu progreso dentro de la app.';

  // =========================
  // GETTER DE FILTRADO
  // =========================

  // Este bloque devuelve solo los juegos que deben mostrarse según el filtro activo
  get juegosFiltrados() {
    // Si el filtro activo es "All", devuelve todos los juegos
    if (this.filtroActivo === 'All') {
      return this.juegos;
    }

    // Si no es "All", devuelve solo los juegos cuyo nivel coincida con el filtro
    return this.juegos.filter(juego => juego.nivel === this.filtroActivo);
  }

  // =========================
  // EVENTOS
  // =========================

  // Cambia el filtro activo al hacer clic en un botón
  seleccionarFiltro(filtro: string) {
    this.filtroActivo = filtro;
  }

  // Acción al pulsar el botón de jugar
  iniciarJuego(nombreJuego: string) {
    alert(`Has iniciado el juego: ${nombreJuego}`);
  }

  // Acción para el reto destacado
  comenzarReto() {
    alert('Has comenzado el reto especial de la semana.');
  }
}