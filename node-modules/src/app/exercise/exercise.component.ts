import { Component, OnInit } from '@angular/core';
import { equal } from 'assert';
import { empty } from 'rxjs';
import { isEmptyExpression } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  username = '';

  constructor() {}

  ngOnInit(): void {
  }

}
