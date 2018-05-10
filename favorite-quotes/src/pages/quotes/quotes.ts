import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuoteGroup } from '../../data/quote-group.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup: QuoteGroup;

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.quoteGroup = this.navParams.data;
  }

  // NOTE: indifferently to initialize it in constructor, ngOnInit and constructor are executed BEFORE template rendering
  // ngOnInit() {
  //   this.quoteGroup = this.navParams.data;
  // }

  ionViewDidLoad() {
    //NOTE: ionViewDidLoad triggers happens AFTER template rendering, so it is not a good idea to manipulate template variables here, or put a Elvis operator (?) alternatively on template where trying to access variable
    console.log('ionViewDidLoad QuotesPage');
  }

}
