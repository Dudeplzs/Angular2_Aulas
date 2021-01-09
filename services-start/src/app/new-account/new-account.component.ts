import { AccountsService } from './../Accounts.service';
import { LoggingService } from './../logg/logging.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /*Quando chamamos a class LoggingService no contructor, aqui o Angular sabe o que queremos mas não sabe como nos dar essa instância
  Para temos de dizer ao Angular como criar a instância, para isso basta escrever "providers: [LoggingService]" */
  // providers: [LoggingService] 
})
export class NewAccountComponent {

  constructor( private loggingServices: LoggingService, private accountsService: AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    //Esta não é a maneira correcta de usar um Logging Service!!
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingServices.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    this.accountsService.statusUpdate.subscribe(
      (status: string) => alert('New Status: ' + status)
    )
  }
}