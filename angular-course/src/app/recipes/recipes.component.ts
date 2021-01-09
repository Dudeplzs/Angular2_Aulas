import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeComponent: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    /*Comunicação entre Recipe e Recipe-item
    Vamos fazer listen ao evento passado no RecipeService, para sabermos se vamos mostrar 
    a receita seleccionada ou se vamos mostrar a textbox "Please select a Recipe!"*/
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeComponent = recipe;
      }
    );
  }



}
