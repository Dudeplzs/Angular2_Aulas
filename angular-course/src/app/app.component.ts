import { FormsModule } from '@angular/forms';
import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectorStored = 'recipe';

  onNavBarSelected(selectorChoose: string){
    this.selectorStored=selectorChoose;
  }
}
