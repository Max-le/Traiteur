import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-pizza',
  templateUrl: './menu-pizza.component.html',
  styleUrls: ['./menu-pizza.component.css']
})
export class MenuPizzaComponent implements OnInit {


  pizzas = ["Margarita", "Veggie", "Royale"]
  constructor() { }

  ngOnInit(): void {
  }

}
