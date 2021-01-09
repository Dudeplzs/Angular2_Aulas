import { ShoppingListService } from './../shoppin-list.service';
import { Ingredient } from './../../shared/ingredient.mode';
import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:true}) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(){
  }

  onAddIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    // this.shoppingListService.ingredientAdded.emit(newIngredient)
    this.shoppingListService.addIngredient(newIngredient);
    }

}
