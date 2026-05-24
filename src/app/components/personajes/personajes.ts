import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes {

  filtro: string = 'todos';

get personajesFiltrados() {
  if (this.filtro === 'favoritos') {
    return this.personajes.filter(p => p.favorito);
  }

  if (this.filtro === 'bloqueados') {
    return this.personajes.filter(p => p.locked);
  }

  return this.personajes;
}

verMas(personaje: any) {
  alert(`${personaje.nombre} - ${personaje.descripcion}`);
}

toggleFavorito(personaje: any) {
  personaje.favorito = !personaje.favorito;
}

  personajes = [
    {
      nombre: 'Mario',
      descripcion: 'Héroe principal del Reino Champiñón.',
      imagen: 'assets/mario.png',
      favorito: true
    },
    {
      nombre: 'Luigi',
      descripcion: 'Hermano de Mario y experto en fantasmas.',
      imagen: 'assets/luigi.png',
      favorito: false
    },
    {
      nombre: 'Peach',
      descripcion: 'Princesa del Reino Champiñón.',
      imagen: 'assets/peach.webp',
      favorito: true
    },
    {
      nombre: 'Yoshi',
      descripcion: 'Compañero fiel de aventuras.',
      imagen: 'assets/yoshi.png',
      favorito: false
    },
    {
      nombre: 'Koopa',
      descripcion: 'Héroe principal del Reino Champiñón.',
      imagen: 'assets/koopa.webp',
      favorito: true
    },
    {
      nombre: 'Bowser',
      descripcion: 'Héroe principal del Reino Champiñón.',
      imagen: 'assets/bowser.png',
      favorito: true
    },
    // CARD BLOQUEADA
    {
      nombre: 'Rosalina',
      descripcion: 'Sigue jugando para desbloquear más personajes',
      imagen: 'assets/rosalina.png',
      favorito: false,
      locked: true
    }
  ];

}