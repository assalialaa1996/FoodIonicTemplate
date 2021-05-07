import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VtPopupPageRoutingModule } from './vt-popup-routing.module';

import { VtPopupPage } from './vt-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    VtPopupPageRoutingModule
  ],
  declarations: [VtPopupPage]
})
export class VtPopupPageModule {}
