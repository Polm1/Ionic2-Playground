import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RecipePageModule } from '../pages/recipe/recipe.module';
import { RecipesPageModule } from '../pages/recipes/recipes.module';
import { SaveRecipePageModule } from '../pages/save-recipe/save-recipe.module';
import { ShoppingListPageModule } from '../pages/shopping-list/shopping-list.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';

import { AuthService } from '../services/auth.service';
import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../services/shopping-list.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    SaveRecipePageModule,
    RecipePageModule,
    RecipesPageModule,
    ShoppingListPageModule,
    LoginPageModule,
    SignupPageModule,
    TabsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    RecipeService,
    ShoppingListService
  ]
})
export class AppModule {}
