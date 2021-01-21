import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Caso não sejam feitas alterações!!
    // this.errorMessage = this.route.snapshot.params['message'];
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data ['message'];
      }
    );
  }

}