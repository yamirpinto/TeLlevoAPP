import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfreceViajePageRoutingModule } from './ofrece-viaje-routing.module';

import { OfreceViajePage } from './ofrece-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfreceViajePageRoutingModule
  ],
  declarations: [OfreceViajePage]
})
export class OfreceViajePageModule {}
