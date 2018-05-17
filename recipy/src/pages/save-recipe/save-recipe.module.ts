import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveRecipePage } from './save-recipe';

@NgModule({
  declarations: [
    SaveRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(SaveRecipePage),
  ],
})
export class SaveRecipePageModule {}
