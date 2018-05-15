import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewRecipePageModule } from '../pages/new-recipe/new-recipe.module';
import { RecipePageModule } from '../pages/recipe/recipe.module';
import { RecipesPageModule } from '../pages/recipes/recipes.module';
import { ShoppingListPageModule } from '../pages/shopping-list/shopping-list.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    NewRecipePageModule,
    RecipePageModule,
    RecipesPageModule,
    ShoppingListPageModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
