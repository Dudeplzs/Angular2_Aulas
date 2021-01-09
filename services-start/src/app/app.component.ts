import { AccountsService } from './Accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  //Aqui estamos a defenir o array accounts, que tem um nome e um status, sendo este array empty
  accounts: {name: string, status: string}[] = []

  constructor(private accountServices: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountServices.accounts;
  }
}
