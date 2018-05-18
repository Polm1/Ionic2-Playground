import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RecipesPage } from '../pages/recipes/recipes';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';


import { env } from '../../environments/config.dev';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  recipesPage:any = RecipesPage;
  shoppingListPage:any = ShoppingListPage;
  loginPage:any = LoginPage;
  signupPage:any = SignupPage;
  tabsPage:any = TabsPage;

  @ViewChild('nav') navController: NavController

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuController: MenuController
  ) {
    // NOTE: first things first :)
    firebase.initializeApp({
      apiKey: env.firebase.apiKey,
      authDomain: env.firebase.authDomain
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  load(page: any) {
    this.navController.setRoot(page);
    this.menuController.close();
  }

  logout() {
    console.log('-- logged out');
  }
}
