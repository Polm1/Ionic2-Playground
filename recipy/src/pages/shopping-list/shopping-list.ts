import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../services/shopping-list.service';
import { ShoppingItem } from '../../models/shopping-item.model';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  public shoppingList: ShoppingItem[];

  constructor(private shoppingListService: ShoppingListService) {
    //
  }

  addItem(form: NgForm) {
    let shoppingItem = new ShoppingItem(form.value.itemName, form.value.itemAmount);
    this.shoppingListService.addItem(shoppingItem);
    this.loadShoppingList();
    form.reset();
  }

  removeItem(item: ShoppingItem) {
    this.shoppingListService.removeItem(item);
    this.loadShoppingList();
  }

  private loadShoppingList() {
    this.shoppingList = this.shoppingListService.getList();
  }

}