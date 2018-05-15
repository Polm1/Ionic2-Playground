import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { QuotesPage } from '../quotes/quotes';
import { Quote } from '../../data/quote.interface';
import { QuoteGroup } from '../../data/quote-group.interface';
import QuotesData from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotes: QuoteGroup[];

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ngOnInit() {
    this.quotes = QuotesData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage - quotes', this.quotes);
  }

  viewQuotes(quoteGroup: QuoteGroup) {
    console.log('-- home.ts - quoteGroup', quoteGroup);
    this.navCtrl.push(QuotesPage, quoteGroup);
  }
}


