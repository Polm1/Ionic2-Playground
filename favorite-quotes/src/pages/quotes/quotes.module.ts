import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesPage } from './quotes';

import { QuotesService } from '../../services/quotes.service';

@NgModule({
  declarations: [
    QuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesPage),
  ],
  providers: [
    QuotesService
  ]
})
export class QuotesPageModule {}
