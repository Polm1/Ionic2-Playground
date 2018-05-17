import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { ActionSheetController, IonicPage, AlertController, ToastController, NavParams } from 'ionic-angular';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@IonicPage()
@Component({
  selector: 'page-save-recipe',
  templateUrl: 'save-recipe.html',
})
// NOTE: reactive approach
// TODO: refactor renaming with more general semantic than "new"
export class SaveRecipePage {
  targetRecipe: Recipe;
  saveRecipeForm: FormGroup;
  difficultyOptions: Array<string>;

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private recipeService: RecipeService,
    private navParams: NavParams
  ) {
    this.difficultyOptions = ['Easy', 'Medium', 'Hard'];

    if(this.navParams.get('targetRecipe') !== null) {
      this.targetRecipe = this.navParams.get('targetRecipe');
    } else {
      this.targetRecipe = new Recipe(null, null, 'Medium', []);
    }
    this.initializeForm();
  }

  saveRecipe() {
    const value = this.saveRecipeForm.value;
    let ingredients = [];
    if(value.ingredients.length > 0) {
      ingredients = value.ingredients.map((name) => {
        console.log('-- SaveRecipePage.addRecipe - name', name);
        return { name: name, amount: 1 };
      })
    }

    let recipe = new Recipe(
      value.title,
      value.description,
      value.difficulty,
      ingredients,
    );

    if(this.navParams.get('targetRecipe') !== null) {
      this.recipeService.updateRecipe(this.targetRecipe, recipe);
      this.fireToast('Recipe updated!');
    } else {
      this.recipeService.addRecipe(recipe);
      this.fireToast('Recipe added!');
    }
    this.initializeForm();
  }

  manageIngredients() {
    this.manageActionSheet();
  }

  private initializeForm() {
    let title = this.targetRecipe.title;
    let description = this.targetRecipe.description;
    let difficulty = this.targetRecipe.difficulty;
    let ingredients = []
    for (let ingredient of this.targetRecipe.ingredients) {
      ingredients.push(new FormControl(ingredient.name, Validators.required));
    }

    this.saveRecipeForm = new FormGroup(
      {
        'title': new FormControl(title, Validators.required),
        'description': new FormControl(description, Validators.required),
        'difficulty': new FormControl(difficulty, Validators.required),
        'ingredients': new FormArray(ingredients)
      }
    );
  }

  private manageActionSheet() {
    let actionSheet = this.actionSheetController.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.addIngredientAlert();
          }
        },
        {
          text: 'Remove all Ingredients',
          role: 'destructive',
          handler: () => {
            const ingredientsArray: FormArray = (<FormArray>this.saveRecipeForm.get('ingredients'));
            const len = ingredientsArray.length;
            if(len > 0) {
              for(let i = len - 1; i >= 0; i--) {
                ingredientsArray.removeAt(i);
              }
            }
            this.fireToast('All ingredients removed!');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  private addIngredientAlert() {
    let alert = this.alertController.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'ingredientName',
          placeholder: 'Salsiccia molta'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: (data) => {
            // NOTE: "arabeggiant" stuff here...not sure if goosta...
            if(data.ingredientName.trim() == '' || data.ingredientName == '') {
              this.fireToast('Please enter a valid ingredient!');
            } else {
              (<FormArray>this.saveRecipeForm.get('ingredients')).push(new FormControl(data.ingredientName, Validators.required));
              this.fireToast('Ingredient added!');
            }
          }
        }
      ]
    });
    alert.present();
  }

  private fireToast(message: string) {
    let toast = this.toastController.create({
      message: message,
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }
}
