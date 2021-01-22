import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lista = [];
  checkBoxStatus = false;

  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
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
  onRemoveItem(index: number){
    this.lista.splice(index, 1);
  }

  // tslint:disable-next-line: typedef
  onCheckboxClick(){
    this.checkBoxStatus = !this.checkBoxStatus;
    console.log(this.checkBoxStatus);
  }


}
