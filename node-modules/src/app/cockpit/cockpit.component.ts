import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName ='';
  //newServerContent ='';
  //Para sabermos que tipo de elemento é, o que podemos fazer é um console log. E vemos que é um ElementRef
  @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
    // Boas práticas -> Colocar o HtmlInputElement para o gajo perceber o que vai receber, neste caso ele só vai receber Html elements
    //console.log(this.serverContentInput);
   this.serverCreated.emit({
     serverName: nameInput.value,
     serverContent: this.serverContentInput.nativeElement.value
   });
  }

  onAddBlueprint(nameInput){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
