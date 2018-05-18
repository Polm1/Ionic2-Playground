import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { SaveRecipePage } from '../save-recipe/save-recipe';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { RecipePage } from '../recipe/recipe';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  public saveRecipePage = SaveRecipePage;
  public recipePage = RecipePage

  public recipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) {
    //
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getRecipes();
  }
}
