import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuoteGroup } from '../../data/quote-group.interface';
import { QuotesService } from '../../services/quotes.service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteGroup: QuoteGroup;

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
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

  addToFavorites(selectedQuote: Quote) {
    const addToFavoritesAlert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Iz rilly shure?',
      buttons: [
        {
          text: 'Yessah',
          handler: () => {
            console.log('Agree clicked');
            this.quotesService.addToFavorites(selectedQuote);
          }
        },
        {
          text: 'No way',
          // NOTE: role: 'cancel' ensures that alert will be dismissed only clicking on this button, not on background too
          // role: 'cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    addToFavoritesAlert.present();
  }

  removeFromFavorites(selectedQuote: Quote) {
    this.quotesService.removeFromFavorites(selectedQuote);
  }

  isFavorite(selectedQuote: Quote) {
    return this.quotesService.isFavorite(selectedQuote);
  }
}
