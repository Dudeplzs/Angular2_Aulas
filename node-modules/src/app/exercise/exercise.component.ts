import { Component, OnInit } from '@angular/core';
import { isEmptyExpression } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  username = '';
  showSecret = false;
  log = [];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  OnIntervalEmitter(intervalNumber: number){
    if(intervalNumber % 2 === 0 ){
      this.evenNumbers.push(intervalNumber);
    }
    else{
      this.oddNumbers.push(intervalNumber);
    }
  }


}