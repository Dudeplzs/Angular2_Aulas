import { Ingredient } from './../shared/ingredient.mode';
import { EventEmitter } from "@angular/core";   

export class ShoppingListService{
    //Shopping-Edit
    ingredientAdded = new EventEmitter<Ingredient[]>();
    //Shopping-list
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Potatos', 10)
    
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
      }
    
}