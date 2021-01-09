import { AccountsService } from './../Accounts.service';
import { Component, Input } from '@angular/core';
import { LoggingService } from '../logg/logging.service';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string; };
  @Input() id: number;

  constructor(private LoggingServices: LoggingService, private accountsService: AccountsService){

  }

  onSetTo(status: string) {
    // console.log('A server status changed, new status: ' + status);
    // this.LoggingServices.logStatusChange(status);
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdate.emit(status);
  }
}
