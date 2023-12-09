import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitaViajePage } from './solicita-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitaViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitaViajePageRoutingModule {}
