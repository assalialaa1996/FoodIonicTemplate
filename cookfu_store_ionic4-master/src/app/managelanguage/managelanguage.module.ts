import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagelanguagePageRoutingModule } from './managelanguage-routing.module';

import { ManagelanguagePage } from './managelanguage.page';
import { TranslateModule } from '@ngx-translate/core'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ManagelanguagePageRoutingModule
  ],
  declarations: [ManagelanguagePage]
})
export class ManagelanguagePageModule {}
