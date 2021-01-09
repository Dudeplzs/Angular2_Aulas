import { RecipeService } from './../recipe.service';
import { Recipe } from '../recipes.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeList = new EventEmitter<Recipe>();
  recipes: Recipe [];
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //Aqui vamos buscar a receita ao serviço RecipeService com o método getRecipe() do serviço
    this.recipes = this.recipeService.getRecipes();
  }
  
  // onRecipeList(recipe: Recipe){
  //   this.recipeList.emit(recipe);
  // }

}
