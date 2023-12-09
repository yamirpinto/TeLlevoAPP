import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitaViajePageRoutingModule } from './solicita-viaje-routing.module';

import { SolicitaViajePage } from './solicita-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitaViajePageRoutingModule
  ],
  declarations: [SolicitaViajePage]
})
export class SolicitaViajePageModule {}
