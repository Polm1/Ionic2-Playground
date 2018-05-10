import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {

  item: {
    name: string,
    quantity: number
  };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    console.log('-- buyout - this.navParams.data', this.navParams.data);
    this.item = this.navParams.data;
    console.log('-- buyout - this.item', this.item);
  }

  buyItem() {
    this.navCtrl.popToRoot();
  }

}
