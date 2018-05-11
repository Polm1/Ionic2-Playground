import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';

import { QuotesService } from '../../services/quotes.service';

@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
  ],
  providers: [
    QuotesService
  ]
})
export class FavoritesPageModule {}
