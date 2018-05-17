import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { ActionSheetController, IonicPage, AlertController, ToastController, NavParams } from 'ionic-angular';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@IonicPage()
@Component({
  selector: 'page-new-recipe',
  templateUrl: 'new-recipe.html',
})
//NOTE: reactive approach
export class NewRecipePage {
  targetRecipe: Recipe;
  newRecipeForm: FormGroup;
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

  addRecipe() {
    const value = this.newRecipeForm.value;
    let ingredients = [];
    if(value.ingredients.length > 0) {
      ingredients = value.ingredients.map((name) => {
        console.log('-- NewRecipePage.addRecipe - name', name);
        return { name: name, amount: 1 };
      })
    }

    let recipe = new Recipe(
      value.title,
      value.description,
      value.difficulty,
      ingredients,
    );
    this.recipeService.addRecipe(recipe);
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

    this.newRecipeForm = new FormGroup(
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
            const ingredientsArray: FormArray = (<FormArray>this.newRecipeForm.get('ingredients'));
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
              (<FormArray>this.newRecipeForm.get('ingredients')).push(new FormControl(data.ingredientName, Validators.required));
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
