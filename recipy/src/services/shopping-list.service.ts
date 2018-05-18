import { Ingredient } from '../models/ingredient.model';


export class ShoppingListService {
  private shoppingList: Ingredient[] = [];

  addItem(shoppingItem: Ingredient) {
    this.shoppingList.push(shoppingItem);
  }

  addItems(shoppingItems: Ingredient[]) {
    this.shoppingList.push(...shoppingItems);

    // TODO: check how to merge ingredients
    // let redux = this.shoppingList.reduce((item) => {
    //   console.log(item);
    //   return item;
    // });
    // console.log(redux);

    console.log('-- addItems - this.shoppingList', this.shoppingList);
  }

  removeItem(shoppingItem: Ingredient) {
    let itemIndex = this.shoppingList.indexOf(shoppingItem);
    this.shoppingList.splice(itemIndex, 1);
  }

  getList() {
    return this.shoppingList;
  }
}
