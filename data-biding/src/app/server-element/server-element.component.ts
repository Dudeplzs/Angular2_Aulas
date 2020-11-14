import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, 
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None -- Por default é o Emulated, Tbm temos o Native que não é suportado por todos os Browsers
})
export class ServerElementComponent implements OnInit, OnChanges, 
// DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('Contructor called!');
  }
 
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!');
  }

  // ngDoCheck() { //Degrada a performance, não usar, pois vai estar sempre a fazer "Check", cada vez que ocorrer alguma alteração
  //   console.log('ngDoCheck called!');
  // }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');  
  }

  ngAfterContentChecked(){
  console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');  
  }

  ngAfterViewChecked(){
  console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!');
  }

}
