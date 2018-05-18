import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  public shoppingList: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.loadShoppingList();
  }

  addItem(form: NgForm) {
    let shoppingItem = new Ingredient(form.value.itemName, form.value.itemAmount);
    this.shoppingListService.addItem(shoppingItem);
    this.loadShoppingList();
    form.reset();
  }

  removeItem(item: Ingredient) {
    this.shoppingListService.removeItem(item);
    this.loadShoppingList();
  }

  private loadShoppingList() {
    this.shoppingList = this.shoppingListService.getList();
  }

}
