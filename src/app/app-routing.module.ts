import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule) },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  { path: 'viajes', loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesPageModule) },
  { path: 'solicita-viaje', loadChildren: () => import('./solicita-viaje/solicita-viaje.module').then(m => m.SolicitaViajePageModule) },
  { path: 'ofrece-viaje', loadChildren: () => import('./ofrece-viaje/ofrece-viaje.module').then(m => m.OfreceViajePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
