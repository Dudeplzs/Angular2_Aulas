import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipes.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //Prcisamos de ir buscar a class Recipes do recipe.model.ts para ele a poder passar para o componente
  @Input() recipe: Recipe; 
  // @Output() showRecipeItemEmitor = new EventEmitter<void>();
 
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onShowRecipeItem(){
    //Aqui vamos emitir o evento "recipeSelected"
    this.recipeService.recipeSelected.emit(this.recipe);
    // this.showRecipeItemEmitor.emit();
  }

}
