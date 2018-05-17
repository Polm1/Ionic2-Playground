import { Recipe } from '../../models/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    console.log('-- RecipeService.addRecipe - recipe', recipe);
    this.recipes.push(recipe);
  }

  getRecipes() {
    return this.recipes;
  }

  updateRecipe(recipe: Recipe) {
    console.log('-- RecipeService.updateRecipe - recipe', recipe);
  }

  removeRecipe(recipe: Recipe) {
    console.log('-- RecipeService.removeRecipe - recipe', recipe);
  }
}
