import { Recipe } from '../../models/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    console.log('-- RecipeService.addRecipe - recipe', recipe);
    this.recipes.push(recipe);
  }

  getRecipes() {
    console.log('-- RecipeService.getRecipes - this.recipes', this.recipes);
    return this.recipes;
  }

  updateRecipe(targetRecipe: Recipe, recipe: Recipe) {
    let targetRecipeIndex = this.recipes.indexOf(targetRecipe);
    this.recipes[targetRecipeIndex] = recipe;
    console.log('-- RecipeService.updateRecipe - this.recipes', this.recipes);
    console.log('-- RecipeService.updateRecipe - recipe', recipe);
  }

  removeRecipe(recipe: Recipe) {
    let recipeIndex = this.recipes.indexOf(recipe);
    this.recipes.splice(recipeIndex, 1);
    console.log('-- RecipeService.removeRecipe - recipe', recipe);
  }
}
