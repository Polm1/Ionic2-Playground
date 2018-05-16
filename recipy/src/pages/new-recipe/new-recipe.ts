import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActionSheetController, IonicPage, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-recipe',
  templateUrl: 'new-recipe.html',
})
//NOTE: reactive approach
export class NewRecipePage {
  newRecipeForm: FormGroup;
  difficultyOptions = ['Easy', 'Medium', 'Hard'];

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {
    this.initializeForm();
  }

  submit() {
    console.log(this.newRecipeForm);
  }

  manageIngredients() {
    this.manageActionSheet();
  }

  private initializeForm() {
    this.newRecipeForm = new FormGroup(
      {
        'title': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'difficulty': new FormControl('Medium', Validators.required)
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
            console.log('Add Ingredient clicked');
            this.addIngredientAlert();
          }
        },
        {
          text: 'Remove all Ingredients',
          role: 'destructive',
          handler: () => {
            console.log('Remove all Ingredients clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  private addIngredientAlert() {
    let alert = this.alertController.create({
      title: 'Add Ingredint',
      inputs: [
        {
          name: 'ingredient',
          placeholder: 'Salsiccia molta'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            //TODO: add validation
            console.log(data);
          }
        }
      ]
    });
    alert.present();
  }
}
