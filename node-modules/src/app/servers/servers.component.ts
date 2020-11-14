import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  ServerCreationStatus = 'No server was created!';
  serverName = 'TestServer';

  // tslint:disable-next-line: no-trailing-whitespace
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    // tslint:disable-next-line: whitespace
    },1000);
  }

  // tslint:disable-next-line: typedef
  OnCreatedServer(){
    this.ServerCreationStatus = `Server was Created! Name is ${this.serverName}`;
  }

  // tslint:disable-next-line: typedef
  OnUpdateServerEvent(event: Event){
    // tslint:disable-next-line: whitespace
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  ngOnInit(): void {
  }

}
