import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-buyappalert',
  templateUrl: './buyappalert.page.html',
  styleUrls: ['./buyappalert.page.scss'],
})
export class BuyappalertPage implements OnInit {
  loadingShown: boolean;
  loader: HTMLIonLoadingElement;
  isLoading: boolean;

  constructor(public navCtrl: NavController, public modalController: ModalController,
    public inAppBrowser: InAppBrowser, private http: HttpClient, private loadingController: LoadingController,private translate: TranslateService) {
      
    }
    
    ngOnInit() {
    }
    dismiss() {
      this.modalController.dismiss();
    }

  onCodecanoyon() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.inAppBrowser.create('https://bit.ly/cc2_CookfuIonic', '_system', options);
  }
  async loadingPresent(message) {
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

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }
  onwhatsapp() {
      this.loadingPresent(this.translate.instant('opening_WhatsApp'));
      this.http.get('https://dashboard.vtlabs.dev/whatsapp.php?product_name=cookfu&source=template').subscribe((res: any) => {
        this.loadingDismiss();
        return this.inAppBrowser.create(res['link'], '_system');
      }, (err) => {
        console.log("Error rating:", JSON.stringify(err));
        this.loadingDismiss();
      });
  }

}
