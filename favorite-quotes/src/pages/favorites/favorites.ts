import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  public favoriteQuotes: Quote[];
  public quote: Quote;

  constructor(
    private quoteservice: QuotesService,
    private modalCtrl: ModalController
  ) {
    this.favoriteQuotes = this.quoteservice.getFavorites();
  }

  view(quote: Quote) {
    let quoteModal = this.modalCtrl.create(QuotePage, quote);
    quoteModal.present();
    quoteModal.onDidDismiss((remove: boolean) => {
      if(remove === true) {
        this.unfavorite(quote);
      }
    })
  }

  unfavorite(quote: Quote) {
    // NOTE: here, on lesson 65, the course perform another slice to update favorites page...maybe it is due to the fact that in his service is returning a COPY of favorites,
    // with my implementation (that returns the real instance of favorites, not his copy) seems to work fine
    console.log('-- FavoritesPage.unfavoriteQuote - quote', quote);
    this.quoteservice.removeFromFavorites(quote);
  }
}
