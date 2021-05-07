import { Component, OnInit, Inject } from '@angular/core';
import { Constants } from '../models/constants.models';
import { APP_CONFIG, AppConfig } from '../app.config';
import { Events } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managelanguage',
  templateUrl: './managelanguage.page.html',
  styleUrls: ['./managelanguage.page.scss'],
})
export class ManagelanguagePage implements OnInit {
  defaultLanguageCode: any;

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private events: Events, private router: Router) {
    this.defaultLanguageCode = this.config.availableLanguages[0].code;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }
  ngOnInit() {
  }

  languageConfirm() {
    this.events.publish('language:selection', this.defaultLanguageCode);
    window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    this.router.navigateByUrl('/tabs/orders');
  }

}
