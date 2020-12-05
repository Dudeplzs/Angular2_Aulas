import { Recipe } from '../recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe [] = [
    new Recipe('Lasanha', 'Lasanha de Carne', 'https://www.clubedereceita.com.br/wp-content/uploads/2019/05/receita-de-lasanha-rapida.jpg'),
    new Recipe('Carbonara', 'Carbonara com natas', 'https://www.nit.pt/wp-content/uploads/2018/02/9da364f17ac13d1fc3235a0314890a5d.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
