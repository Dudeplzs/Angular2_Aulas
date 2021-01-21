import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  savedChanges = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        // if(queryParams['allowEdit'] === '1'){
        //   this.allowEdit = true;
        // }
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    // Quando forem feitas alterações ao servidor estas são gravadas e após isso, navegamos para o path "acima"
    this.savedChanges = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise <boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    // Caso tenham (o serverName ou o server status tenha sido alterado) E (Essas alterações não tenham sido gravadas)
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.savedChanges) {
      return confirm ('Changes were made and you didnt saved them');
    } else {
      return true;
    }
  }

}
