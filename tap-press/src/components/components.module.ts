import { NgModule } from '@angular/core';

import { ActionComponent } from './action/action';
import { ResetComponent } from './reset/reset';

@NgModule({
	declarations: [
    ActionComponent,
    ResetComponent
  ],
	imports: [],
	exports: [
    ActionComponent,
    ResetComponent
  ]
})
export class ComponentsModule {}
