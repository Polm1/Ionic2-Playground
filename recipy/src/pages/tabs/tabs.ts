import { Component } from '@angular/core';

import { IonicPage } from 'ionic-angular';

import { ShoppingListPage } from '../shopping-list/shopping-list';
import { RecipesPage } from '../recipes/recipes';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public recipesPage = RecipesPage;
  public shoppingListPage = ShoppingListPage;

  constructor() {

  }
}
