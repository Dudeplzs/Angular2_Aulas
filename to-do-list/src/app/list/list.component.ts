import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cenas = '';
  lista = [];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onGo(nameInput: HTMLInputElement){
    this.lista.push(nameInput.value);
    console.log(this.lista);
  }

  // tslint:disable-next-line: typedef
  onClear(){
    this.lista = [];
  }

  // tslint:disable-next-line: typedef
  onRemoveItem(){
    // tslint:disable-next-line: whitespace
    // tslint:disable-next-line: prefer-for-of
    for (let i; i<this.lista.length; i++){
      this.lista.splice(i,1);
    }
  }


}
