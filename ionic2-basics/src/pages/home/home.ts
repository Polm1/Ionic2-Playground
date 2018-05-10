import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DojoPage } from '../dojo/dojo';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController
  ) {

  }

  enterTheDojo() {
    this.navCtrl.push(DojoPage);
  }

  enterTheShop() {
    this.navCtrl.push(ShopPage);
  }

}
