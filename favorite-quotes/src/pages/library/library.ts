import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { QuotesPage } from '../quotes/quotes';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotes: {
    category: string,
    quote: Quote[],
    icon: string
  }[];

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit() {
    this.quotes = quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage - quotes', this.quotes);
  }

  viewQuotes(quotesCategory: string) {
    console.log('-- home.ts - quotesCategory', quotesCategory);
    this.navCtrl.push(QuotesPage, quotesCategory);
  }
}


