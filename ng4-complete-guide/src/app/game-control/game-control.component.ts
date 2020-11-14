import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  OnStartGame(){
    this.interval = setInterval ( () => {
    this.intervalFired.emit(this.counter + 1);
    this.counter++;
    },1000)
  }

  OnStopGame(){
    clearInterval(this.interval);
  }
}
