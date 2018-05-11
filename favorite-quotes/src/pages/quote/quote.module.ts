import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotePage } from './quote';
import { QuotesService } from '../../services/quotes.service';

@NgModule({
  declarations: [
    QuotePage,
  ],
  imports: [
    IonicPageModule.forChild(QuotePage),
  ],
  providers: [
    QuotesService
  ]
})
export class QuotePageModule {}
