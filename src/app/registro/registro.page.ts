import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  registroForm: any = {}; 

  constructor(private router: Router) {}

  registrarUsuario() {
    
    if (!this.validarFormulario()) {
      this.mostrarNotificacion('Por favor, completa todos los campos.');
      return;
    }


    const datosUsuario = {
      email: this.registroForm.email,
      password: this.registroForm.password,
    };

  
    localStorage.setItem('usuarioRegistrado', JSON.stringify(datosUsuario));

    this.mostrarNotificacion('Usuario registrado exitosamente');
    this.router.navigateByUrl('/login', { replaceUrl: true });
    this.resetearFormulario();
  }

  validarFormulario() {
    return !!this.registroForm.email && !!this.registroForm.password;
  }

  mostrarNotificacion(mensaje: string) {
    Dialog.alert({
      title: 'Mensaje',
      message: mensaje,
      buttonTitle: 'Aceptar',
    });
  }

  resetearFormulario() {
    this.registroForm = {};
  }
}
