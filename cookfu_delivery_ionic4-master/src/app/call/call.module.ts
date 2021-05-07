import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
	
import { IonicModule } from '@ionic/angular';

import { CallPageRoutingModule } from './call-routing.module';

import { CallPage } from './call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    CallPageRoutingModule
  ],
  declarations: [CallPage]
})
export class CallPageModule {}
