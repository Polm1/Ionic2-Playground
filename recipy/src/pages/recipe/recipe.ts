import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController } from 'ionic-angular';

import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { RecipeService } from '../services/recipe.service';

import { NewRecipePage } from '../new-recipe/new-recipe';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  public recipe: Recipe;
  public newRecipePage: any;

  constructor(
    private navParams: NavParams,
    private toastController: ToastController,
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService
  ) {
    this.recipe = this.navParams.data;
    this.newRecipePage = NewRecipePage;
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addItems(ingredients);
    let toast = this.toastController.create({
      message: 'All ingredients were added to your shopping list!',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  editRecipe(recipe: Recipe) {
    console.log('-- RecipePage.editRecipe - recipe', recipe);
    // this.navController.push();
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeService.removeRecipe(recipe);
    let toast = this.toastController.create({
      message: 'Recipe deleted!',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }
}
