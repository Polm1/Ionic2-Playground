import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-recipe',
  templateUrl: 'new-recipe.html',
})
export class NewRecipePage {
  newRecipe = {
    title: '',
    description: '',
    difficulty: 0
  };

  logForm(form) {
    console.log(form.value);
  }

  manageIngredient() {
    console.log('manageIngredient');
  }
}
