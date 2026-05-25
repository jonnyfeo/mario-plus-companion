import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common'; // Permite usar *ngFor en el HTML

@Component({
  selector: 'app-mundos',
  standalone: true,
  imports: [RouterLink, NgFor], // RouterLink para navegación y NgFor para renderizar tarjetas dinámicas
  templateUrl: './mundos.html',
  styleUrl: './mundos.css'
})
export class MundosComponent {

  // Logo mostrado en la barra superior
  logoApp = '/assets/logo-mario-plus.png';

  // Textos del hero
  etiquetaMundos = 'Mario+ - Mundos';
  tituloMundos = 'Mundos de la Franquicia';
  descripcionMundos = 'Descubre los secretos, datos curiosos y localizaciones más emblemáticas del universo de Mario Plus. ¡Elige un rumbo para comenzar tu aventura informativa!';

  // Datos de las tarjetas
  mundos = [
    {
      nombre: 'Reino Champiñón',
      etiqueta: 'Dato Descubierto',
      imagen: '/assets/reino-champinon.jpg',
      descripcion: 'La pacífica tierra gobernada por la Princesa Peach. Famosa por sus colinas verdes, bloques flotantes y abundancia de superchampiñones.'
    },
    {
      nombre: 'Mundo Jungla',
      etiqueta: 'Dato Descubierto',
      imagen: '/assets/mundo-jungla.jpg',
      descripcion: 'El hogar tropical del clan de Donkey Kong. Un territorio lleno de barriles cañón, lianas mecánicas y una vegetación salvaje inmensa.'
    },
    {
      nombre: 'Tierras Oscuras',
      etiqueta: 'Dato Descubierto',
      imagen: '/assets/tierras-oscuras.jpg',
      descripcion: 'El imponente territorio volcánico bajo el dominio de Bowser. Ríos de lava ardiente y fortalezas de piedra custodian este peligroso lugar.'
    },
    {
      nombre: 'Reino de Hielo',
      etiqueta: 'Dato Descubierto',
      imagen: '/assets/reino-hielo.png',
      descripcion: 'Una región congelada repleta de témpanos resbaladizos y pingüinos amigables. Oculta cavernas de cristal bajo sus capas de nieve.'
    },
    {
      nombre: 'Senda Arcoíris',
      etiqueta: 'Dato Descubierto',
      imagen: '/assets/senda-arcoiris.jpg',
      descripcion: 'Una pista mística suspendida en el espacio estelar. Sus caminos multicolores sin barreras desafían la gravedad entre galaxias lejanas.'
    }
  ];

  // Baja suavemente al listado
  irAListadoMundos() {
    const seccion = document.getElementById('listado-mundos');
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Acción temporal
  explorarMundo(nombreMundo: string) {
    alert(`Has seleccionado el mundo: ${nombreMundo}`);
  }
}