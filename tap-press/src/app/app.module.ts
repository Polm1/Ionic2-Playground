import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ResetComponent } from '../components/reset/reset';
import { ActionComponent } from '../components/action/action';
import { TrackingService } from '../services/tracking.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResetComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    //NOTE: no need to declare action and reset components as entryComponents, because they are used with selector in a template
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TrackingService
  ]
})
export class AppModule {}
