import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vt-popup',
  templateUrl: './vt-popup.page.html',
  styleUrls: ['./vt-popup.page.scss'],
})
export class VtPopupPage implements OnInit {
  loadingShown: boolean;
  subscribeForm: FormGroup;
  loader: HTMLIonLoadingElement;
  isLoading: boolean;

  constructor(public modalController: ModalController, private formBuilder: FormBuilder,
    private http: HttpClient, private loadingController: LoadingController, private toastCtrl: ToastController) {

  }

  ngOnInit() {
    this.subscribeForm = this.formBuilder.group({
      email_Id: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])]
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }
  async presentLoader(message) {
    this.isLoading = true;
    return await this.loadingController.create({
      message: message,
      spinner: 'circles' 
    }).then(a => {
      a.present().then(() => {
        console.log('loading presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort laoding'));
        }
      });
    });
  }

  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
  onSubscribe() {
    if (!this.subscribeForm.valid) {
      return this.showToast('Please provide your Email.')
    }
    this.presentLoader('Sending...')
    let req = {
      "email": this.subscribeForm.value.email_Id,
      "source": "opus_template_cookfu"
    }
    this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe((res) => {
      this.showToast('Submitted successfully.')
      this.modalController.dismiss();
      this.dismissLoader();
    })
  }

}
