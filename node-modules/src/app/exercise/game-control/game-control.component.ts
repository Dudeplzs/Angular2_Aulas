import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  counter = 0;
  @Output() intervalEmitter= new EventEmitter<number>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(){
    this.interval = setInterval( () => {
    this.intervalEmitter.emit(this.counter + 1);
    this.counter++;
  }, 1000);
  
  }

  onGameStop(){
    clearInterval(this.interval);
  }

}
