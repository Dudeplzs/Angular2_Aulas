import { LogService } from './../logg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lista: ListElement [] = [];
  // checkBoxStatus = false;

  constructor(private logservice: LogService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  onGo(nameInput: HTMLInputElement){
    const listElement: ListElement = {text: nameInput.value, status: false};
    this.lista.push(listElement);
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
  onCheckboxClick(element: ListElement){
    element.status = !element.status;
    // this.lista[index];
    this.logservice.logChange(element.text, element.status);
  }


}

export interface ListElement{
  text: string;
  status: boolean;
}
