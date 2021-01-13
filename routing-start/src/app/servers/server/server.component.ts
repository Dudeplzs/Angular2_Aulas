import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Vamos passar o id como string, por exemplo '1', de modo a ele ser um numero temos de colocar um +
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    // Caso seja necessário reagir a qq alterção que haja, isto é caso seja escolhido outro server
    this.route.params.subscribe(
      (params: Params) => {
        // Aqui o + serve tbm para transformar o id num número
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit(){
    // Temos de adicionar {relativeTo: this.route}, para o angular router saber para que route relativo ele tem de ir
    /* Cada vez que carregamos num servidor ele não está a perservar a informação do allowEdit,
       então para conseguirmos obter a informação do allowEdit "anterior" temos que usar o queryParamsHandling,
       onde vamos perservar a informação que nos foi dada "antes"
    */
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
