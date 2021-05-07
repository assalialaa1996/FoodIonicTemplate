import { Component, Inject } from '@angular/core';

import { Platform, ModalController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { VtPopupPage } from './vt-popup/vt-popup.page';
import { AppConfig, APP_CONFIG } from './app.config';
import { Constants } from './models/constants.models';
import { InAppBrowserOptions , InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Pt_home',
      text: 'list_of_restaurants',
      url: '/home',
      icon: 'zmdi zmdi-store'
    },
    {
      title: 'my_orders',
      text: 'current_and_past_orders',
      url: '/my-orders',
      icon: 'zmdi zmdi-cutlery'
    },

    {
      title: 'my_details',
      text: 'profile_info_and_delivery_address',
      url: '/my-details',
      icon: 'zmdi zmdi-pin-account'
    },

    {
      title: 'favorites',
      text: 'your_favorite_restaurants',
      url: '/favorited',
      icon: 'zmdi zmdi-favorite'
    },

    {
      title: 'offers',
      text: 'get_latest_offers',
      url: '/offers',
      icon: 'zmdi zmdi-label'
    },

    {
      title: 'my_reviews',
      text: 'list_of_reviews',
      url: '/review',
      icon: 'zmdi zmdi-ticket-star'
    },

    {
      title: 'support',
      text: 'let_us_know_your_query',
      url: '/contact-us',
      icon: 'zmdi zmdi-comment-text'
    },

    {
      title: 'languge',
      text: 'select_preferred_language',
      url: '/managelanguage',
      icon: 'zmdi zmdi-settings'
    },

    {
      title: 'logout',
      text: 'login_whit_different_user',
      url: '/sign-in',
      icon: 'zmdi zmdi-power'
    },
  ];

  // constructor(
  //   private platform: Platform,
  //   private splashScreen: SplashScreen,
  //   private statusBar: StatusBar,
  //   private translate: TranslateService
  // ) {
  //   this.initializeApp();
  //   translate.setDefaultLang('en');
  // }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }
  rtlSide: string = "ľtr";

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private platform: Platform, private statusBar: StatusBar,
  private modalController: ModalController, private splashScreen: SplashScreen, public translate: TranslateService,
  public inAppBrowser: InAppBrowser, events: Events) {
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
  developedBy() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.inAppBrowser.create('https://verbosetechlabs.com/', '_system', options);
  }
  
}
