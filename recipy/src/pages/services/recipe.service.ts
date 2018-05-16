import { Recipe } from '../../models/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getRecipes() {
    return this.recipes;
  }
}
