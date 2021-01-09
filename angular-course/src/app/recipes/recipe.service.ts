import { ShoppingListService } from './../shopping-list/shoppin-list.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.mode";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService{
    //Recipe-item => showRecipeItemEmitor
    recipeSelected= new EventEmitter<Recipe>();
    //Recipe-list
    private recipes: Recipe [] = [
        new Recipe('Lasanha', 
        'Lasanha de Carne', 
        'https://www.clubedereceita.com.br/wp-content/uploads/2019/05/receita-de-lasanha-rapida.jpg', 
        //Ingredients
        [
            new Ingredient('Carne Picada',400),
            new Ingredient('Massa para Lasanha', 500),
            new Ingredient('Queijo Parmezão',150)
        ]), 
        new Recipe('Carbonara', 
        'Carbonara com natas', 
        'https://www.nit.pt/wp-content/uploads/2018/02/9da364f17ac13d1fc3235a0314890a5d.jpg',
        //Ingredients
        [
            new Ingredient('Spaghetti',300),
            new Ingredient('Bacon',600),
            new Ingredient('Ovos',2)

        ])
      ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingridients: Ingredient[]){
        this.shoppingListService.addIngredients(ingridients);
    }
}