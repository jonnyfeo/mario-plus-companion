import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // Añadimos OnInit
import { RouterLink } from '@angular/router';
import { MarioService } from '../../services/mario'; // 1. IMPORTAMOS TU SERVICIO

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes implements OnInit { // Añadimos la interfaz OnInit

  filtro: string = 'todos';
  personajes: any[] = []; // 2. LA LISTA AHORA EMPIEZA VACÍA

  // 3. INYECTAMOS EL SERVICIO EN EL CONSTRUCTOR
  constructor(private marioService: MarioService) {}

  // 4. LE PEDIMOS LOS DATOS AL SERVICIO CUANDO CARGA LA PANTALLA
  ngOnInit(): void {
    this.personajes = this.marioService.obtenerPersonajes();
  }

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
}
