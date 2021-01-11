import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      /* Isto só o possível pq no app.module, temos defenido para ele nos dar o id e o name do user 
      ...{ path: 'users/:id/:name', component: UserComponent }...
      isto é chamado uma única vez, caso os parametros sejam alterados o snapshot não faz actualização dos "dados"*/
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // Já se retirar-mos o snapshot e colocarmos .params.subscribe, cada vez que os parametros forem alterados ele actualiza
    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.id = params['name'];
      }
    );
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
