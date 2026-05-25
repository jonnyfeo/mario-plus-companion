import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 👈 Añadimos esta línea nueva

interface Mundo {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-app-mundos',
  standalone: true,
  imports: [CommonModule, RouterLink],
 templateUrl: './mundos.html',
 styleUrl: './mundos.css'
})
export class MundosComponent {
  titulo: string = 'Mundos por Explorar';
  
  mundos: Mundo[] = [
    {
      id: 1,
      nombre: 'El Reino Champiñón',
      descripcion: 'Praderas verdes y pacíficas llenas de tuberías, bloques sorpresa y el gran castillo de la Princesa Peach.',
      imagen: 'assets/images/reino-champinon.png'
    },
    {
      id: 2,
      nombre: 'El Reino Jungla (Isla Kong)',
      descripcion: 'Un espeso paraíso tropical gobernado por los Kong, repleto de plataformas de madera y karts listos para competir.',
      imagen: 'assets/images/reino-jungla.png'
    },
    {
      id: 3,
      nombre: 'Las Tierras Oscuras (Reino de Bowser)',
      descripcion: 'Un territorio volcánico y hostil con ríos de lava, fortalezas de piedra negra y el imponente castillo flotante de Bowser.',
      imagen: 'assets/images/tierras-oscuras.png'
    },
    {
      id: 4,
      nombre: 'El Reino de Hielo',
      descripcion: 'Un paisaje congelado habitado por simpáticos pingüinos, donde el suelo resbala y los icebergs flotan en aguas heladas.',
      imagen: 'assets/images/reino-hielo.png'
    },
    {
      id: 5,
      nombre: 'La Senda Arcoíris',
      descripcion: 'Una mítica y colorida pista celestial construida sobre el espacio exterior. ¡Solo para los conductores más expertos!',
      imagen: 'assets/images/senda-arcoiris.png'
    }
  ];

  explorarMundo(nombre: string) {
    alert('Abriendo datos de exploración para: ' + nombre);
  }
}