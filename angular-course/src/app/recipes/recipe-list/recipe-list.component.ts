import { Recipe } from '../recipes.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeList = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe('Lasanha', 'Lasanha de Carne', 'https://www.clubedereceita.com.br/wp-content/uploads/2019/05/receita-de-lasanha-rapida.jpg'),
    new Recipe('Carbonara', 'Carbonara com natas', 'https://www.nit.pt/wp-content/uploads/2018/02/9da364f17ac13d1fc3235a0314890a5d.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  onRecipeList(recipe: Recipe){
    this.recipeList.emit(recipe);
  }

}
