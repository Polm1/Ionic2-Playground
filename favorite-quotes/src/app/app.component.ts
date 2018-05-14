import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;

  // NOTE: it is not possible to use navCtrl inijected in the constructor (as done in the others pages) because we are in app.component which is the component that boostraps the app, BEFORE the nav stack is created.
  // The nav stack will be created after the app.component is processed (after the 'ion-nav' inside app.html).
  // To access the nav stack we need to use @ViewChild decorator, which grants to access selected element (before call ngAfteViewInit callback)
  @ViewChild('nav') navCtrl: NavController // #nav selector in template

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // NOTE: it is not possible to use navCtrl.setRoot method navCtrl through injected in the constructor (as done in the others pages) because we are in app.component
  // which is the component that boostraps the app BEFORE the nav stack is created and BEFORE that navCtrl instance is available.
  // The nav stack will be created after the app.component is processed (after the 'ion-nav' inside app.html).
  // To access the nav stack (and nav Controller methods which is that in fact important) we need to use @ViewChild decorator
  load(page: any) {
    this.navCtrl.setRoot(page);
    this.menuCtrl.close();
  }
}

