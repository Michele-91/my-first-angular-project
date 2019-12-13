import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'my-first-project';

  }

}
