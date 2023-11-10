import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedPizzaDirective } from './directives/selected-pizza.directive';



@NgModule({
  declarations: [
    SelectedPizzaDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectedPizzaDirective
  ]
})
export class SharedModule { }
