import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
 dismiss(){
   this.modalController.dismiss();
 }
}
