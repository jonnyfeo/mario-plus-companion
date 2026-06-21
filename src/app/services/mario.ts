import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarioService {

  private listaPersonajes = [
    { nombre: 'Mario', descripcion: 'Héroe principal del Reino Champiñón.', imagen: 'assets/mario.png', favorito: true },
    { nombre: 'Luigi', descripcion: 'Hermano de Mario y experto en fantasmas.', imagen: 'assets/luigi.png', favorito: false },
    { nombre: 'Peach', descripcion: 'Princesa del Reino Champiñón.', imagen: 'assets/peach.webp', favorito: true },
    { nombre: 'Yoshi', descripcion: 'Compañero fiel de aventuras.', imagen: 'assets/yoshi.png', favorito: false },
    { nombre: 'Koopa', descripcion: 'Héroe principal del Reino Champiñón.', imagen: 'assets/koopa.webp', favorito: true },
    { nombre: 'Bowser', descripcion: 'Héroe principal del Reino Champiñón.', imagen: 'assets/bowser.png', favorito: true },
    { nombre: 'Rosalina', descripcion: 'Sigue jugando para desbloquear más personajes', imagen: 'assets/rosalina.png', favorito: false, locked: true }
  ];

  constructor() { }

  obtenerPersonajes() {
    return this.listaPersonajes;
  }
}

