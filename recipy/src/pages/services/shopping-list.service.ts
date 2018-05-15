import { ShoppingItem } from '../../models/shopping-item.model';


export class ShoppingListService {
  private shoppingList: ShoppingItem[] = [];

  addItem(shoppingItem: ShoppingItem) {
    this.shoppingList.push(shoppingItem);
  }

  addItems(shoppingItems: ShoppingItem[]) {
    this.shoppingList.push(...shoppingItems);
  }

  removeItem(shoppingItem: ShoppingItem) {
    let itemIndex = this.shoppingList.indexOf(shoppingItem);
    this.shoppingList.splice(itemIndex, 1);
  }

  getList() {
    return this.shoppingList;
  }
}
