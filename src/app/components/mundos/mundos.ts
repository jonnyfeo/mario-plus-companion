import { Component, OnInit } from '@angular/core'; // 1. Añadimos OnInit
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MundosService, Mundo } from '../../services/mundos';

@Component({
  selector: 'app-app-mundos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mundos.html',
  styleUrl: './mundos.css'
})
export class MundosComponent implements OnInit { // 3. Implementamos OnInit
  titulo: string = 'Mundos por Explorar';
  
  // La lista empieza vacía porque se la pediremos al servicio
  mundos: Mundo[] = [];

  // 4. Inyectamos el servicio en el constructor
  constructor(private mundosService: MundosService) {}

  // 5. Cuando se abre la pantalla, cargamos los mundos desde el servicio
  ngOnInit(): void {
    this.mundos = this.mundosService.obtenerMundos();
  }

  explorarMundo(nombre: string) {
    alert('Abriendo datos de exploración para: ' + nombre);
  }
}
