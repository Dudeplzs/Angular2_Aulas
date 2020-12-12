import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'node-modules';
  serverElements=[{type: 'server', name: 'Testserver', content:'Content test!'}];
}
