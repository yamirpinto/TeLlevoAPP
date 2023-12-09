import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfreceViajePage } from './ofrece-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: OfreceViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfreceViajePageRoutingModule {}
