import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPageModule } from '../pages/favorites/favorites.module';
import { LibraryPageModule } from '../pages/library/library.module';
import { QuotesPageModule } from '../pages/quotes/quotes.module';
import { QuotePageModule } from '../pages/quote/quote.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';

// import { QuotesService } from '../services/quotes.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    FavoritesPageModule,
    LibraryPageModule,
    QuotePageModule,
    QuotesPageModule,
    SettingsPageModule,
    TabsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // NOTE: every component declared here, will be available for navigation stack: if we need a component only in home page, better to declare only on 'imports' and use it with its selector where needed
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    // ,
    // QuotesService
  ]
})
export class AppModule {}
