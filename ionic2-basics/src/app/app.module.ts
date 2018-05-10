import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DojoPage } from '../pages/dojo/dojo';
import { SamuraiPage } from '../pages/dojo/samurai/samurai';
import { ShopPage } from '../pages/shop/shop';
import { BuyoutPage } from '../pages/buyout/buyout';

@NgModule({
  declarations: [
    MyApp,
    BuyoutPage,
    HomePage,
    DojoPage,
    SamuraiPage,
    ShopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuyoutPage,
    HomePage,
    DojoPage,
    SamuraiPage,
    ShopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
