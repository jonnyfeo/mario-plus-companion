import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Permite usar [(ngModel)] en los inputs
import { NgClass } from '@angular/common'; // Permite aplicar clases CSS dinámicamente

@Component({
  selector: 'app-auth',
  imports: [RouterLink, FormsModule, NgClass], // Se importan las herramientas que usaremos en el HTML
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  // Variables enlazadas al formulario mediante two-way binding
  nombre = '';
  username = '';
  email = '';
  password = '';

  // Texto dinámico del botón principal
  textoRegistro = 'Registrar';

  // Mensaje de estado que cambia según la validación
  mensajeEstado = '';

  // Variable booleana para activar estilos de error
  formularioInvalido = false;

  // Función que se ejecuta cuando el usuario pulsa el botón Registrar
  registrarUsuario() {
    // Validamos si algún campo está vacío
    if (!this.nombre || !this.username || !this.email || !this.password) {
      this.formularioInvalido = true;
      this.mensajeEstado = 'Por favor completa todos los campos.';
      return;
    }

    // Si todo está completo, quitamos el error y mostramos mensaje positivo
    this.formularioInvalido = false;
    this.mensajeEstado = `Registro listo para ${this.nombre}.`;
  }
}