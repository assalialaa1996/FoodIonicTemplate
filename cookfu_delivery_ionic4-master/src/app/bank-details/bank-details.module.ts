import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { BankDetailsPageRoutingModule } from './bank-details-routing.module';

import { BankDetailsPage } from './bank-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    BankDetailsPageRoutingModule
  ],
  declarations: [BankDetailsPage]
})
export class BankDetailsPageModule {}
 