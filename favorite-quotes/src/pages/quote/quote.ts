import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  public quote: Quote;

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController
  ) {
      this.quote = this.navParams.data;
  }

  closeModal(remove: boolean = false) {
    this.viewCtrl.dismiss(remove);
  }
}
