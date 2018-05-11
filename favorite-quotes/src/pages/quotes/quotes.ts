import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuoteGroup } from '../../data/quote-group.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup: QuoteGroup;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController
  ) {
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

  showConfirmation(selectedQuote: Quote) {
    const confirmAlert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Iz rilly shure?',
      buttons: [
        {
          text: 'No way',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yessah',
          handler: () => {
            console.log('Agree clicked');
            this.addToFavorites(selectedQuote);
          }
        }
      ]
    });
    confirmAlert.present();
  }

  addToFavorites(selectedQuote: Quote) {
    console.log('-- addToFavorites - selectedQuote', selectedQuote);
  }
}
