import { Component } from '@angular/core';
import { Pizza } from '../Pizza';
import { PIZZAS } from '../pizzas';

@Component({
  selector: 'app-pizza-container',
  templateUrl: './pizza-container.component.html',
  styleUrls: ['./pizza-container.component.css']
})
export class PizzaContainerComponent {
  pizzas: Pizza[] = [];

  selectedPizza: Pizza | undefined;

  ngOnInit(): void {
      this.fillPizzas(PIZZAS);
  }

  fillPizzas(pizzasData: any[]): void {
    this.pizzas = pizzasData.map(pizza => new Pizza(pizza.name, pizza.description, pizza.img));
  }

  onPizzaSelected(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }

}
