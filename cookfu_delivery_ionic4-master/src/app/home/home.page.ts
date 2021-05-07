import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallPage } from '../call/call.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  fabAction = false;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  toggleFab() {
    this.fabAction = !this.fabAction;
  }

  call() {
    this.modalController.create({ component: CallPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

}
