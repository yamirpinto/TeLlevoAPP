// ofrece-viaje.ts
import { Component } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofrece-viaje',
  templateUrl: './ofrece-viaje.page.html',
  styleUrls: ['./ofrece-viaje.page.scss'],
})
export class OfreceViajePage {
  cantidadAsientos: number | undefined;

  constructor(private router: Router) {}

  ofrecerViaje() {
    const usuarioRegistradoString = localStorage.getItem('usuarioRegistrado');
    if (usuarioRegistradoString) {
      const usuarioRegistrado = JSON.parse(usuarioRegistradoString);

      if (this.cantidadAsientos !== undefined) {
        const usuarioOfreciendoViaje = {
          nombre: usuarioRegistrado.nombre,
          cantidadAsientos: this.cantidadAsientos,
        };

        const usuariosOfreciendoViajeString = localStorage.getItem('usuariosOfreciendoViaje');
        const usuariosOfreciendoViaje = usuariosOfreciendoViajeString ? JSON.parse(usuariosOfreciendoViajeString) : [];

        usuariosOfreciendoViaje.push(usuarioOfreciendoViaje);
        localStorage.setItem('usuariosOfreciendoViaje', JSON.stringify(usuariosOfreciendoViaje));

        this.mostrarNotificacion('Viaje ofrecido exitosamente');
        this.router.navigate(['/dashboard']);
      } else {
        this.mostrarNotificacion('Por favor, ingresa la cantidad de asientos disponibles.');
      }
    } else {
      this.mostrarNotificacion('No se ha encontrado un usuario registrado.');
    }
  }

  mostrarNotificacion(mensaje: string) {
    Dialog.alert({
      title: 'Mensaje',
      message: mensaje,
      buttonTitle: 'Aceptar',
    });
  }
}

