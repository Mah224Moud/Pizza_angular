import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../Pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
  @Input() pizzas: Pizza[] = [];
  @Output() pizzaSelected = new EventEmitter<Pizza>();
  selectedPizza: Pizza | undefined;


  selectPizza(pizza: Pizza): void {
    this.selectedPizza = pizza;
    this.pizzaSelected.emit(pizza);
  }
}
