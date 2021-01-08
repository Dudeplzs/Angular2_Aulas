import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logg/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account!: { name: string; status: string; };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor( private LoggingServices: LoggingService){}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.LoggingServices.logStatusChange(status);
  }
}
