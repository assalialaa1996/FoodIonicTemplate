import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { AddItemsPageRoutingModule } from './add-items-routing.module';

import { AddItemsPage } from './add-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    AddItemsPageRoutingModule
  ],
  declarations: [AddItemsPage]
})
export class AddItemsPageModule {} 
