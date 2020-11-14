import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  // tslint:disable-next-line: no-inferrable-types
  serverStatus: string = 'offline';

  // tslint:disable-next-line: typedef
  getServerStatus() {
    return this.serverStatus;
  }

}
