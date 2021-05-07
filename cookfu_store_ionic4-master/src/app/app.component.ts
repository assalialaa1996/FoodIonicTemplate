import { Component, Inject } from '@angular/core';

import { Platform, ModalController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {TranslateService} from '../../node_modules/@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { Constants } from './models/constants.models';
import { VtPopupPage } from './vt-popup/vt-popup.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rtlSide: string = "ľtr";

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private platform: Platform, private statusBar: StatusBar,
  private modalController: ModalController, private splashScreen: SplashScreen, public translate: TranslateService,
   events: Events) {
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE) ? window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE) : 'en';
    this.initializeApp(defaultLang);
    events.subscribe('language:selection', (language) => {
      this.initializeApp(language);
    });
    if (this.config.demoMode) {
      setTimeout(() => {
        this.vtPresentModal()
      }, 15000)
    }
  }
  async vtPresentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }
  initializeApp(lang) {
    this.translate.setDefaultLang(lang);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.use(lang);
      this.setDirectionAccordingly(lang);
    });
  }
  setDirectionAccordingly(lang: string) {    
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }
}
