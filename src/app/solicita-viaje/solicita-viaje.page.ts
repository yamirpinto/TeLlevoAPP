import { ChangeDetectorRef, Component } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-solicita-viaje',
  templateUrl: './solicita-viaje.page.html',
  styleUrls: ['./solicita-viaje.page.scss'],
})
export class SolicitaViajePage {
  viajesDisponibles: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.actualizarViajesDisponibles();
  }

  private actualizarViajesDisponibles() {
    const viajesGuardados = localStorage.getItem('usuariosOfreciendoViaje');
    this.viajesDisponibles = viajesGuardados ? JSON.parse(viajesGuardados) : [];
    console.log(viajesGuardados)
  }

  solicitarViaje(viaje: any) {
    if (viaje.cantidadAsientos > 0) {
      viaje.cantidadAsientos--;
      localStorage.setItem('usuariosOfreciendoViaje', JSON.stringify(this.viajesDisponibles));
      this.actualizarViajesDisponibles();
      this.mostrarNotificacion('Viaje solicitado exitosamente');
    } else {
      this.mostrarNotificacion('No hay asientos disponibles para este viaje');
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
