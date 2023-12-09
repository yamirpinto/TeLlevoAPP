import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: any = {};

  constructor(private router: Router) {}

  iniciarSesion() {

    
    const usuarioRegistradoString = localStorage.getItem('usuarioRegistrado');
    console.log('Cadena JSON almacenada:', usuarioRegistradoString);
    
    const usuarioRegistrado = usuarioRegistradoString ? JSON.parse(usuarioRegistradoString) : null;
    console.log('Credenciales ingresadas:', this.loginForm);
    console.log('Credenciales almacenadas:', usuarioRegistrado);
    if (usuarioRegistrado && usuarioRegistrado.email === this.loginForm.email && usuarioRegistrado.password === this.loginForm.password) {
      this.mostrarNotificacion('Inicio de sesión exitoso');
      this.router.navigate(['/viajes']);
    } else {
      this.mostrarNotificacion('Credenciales incorrectas');
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
