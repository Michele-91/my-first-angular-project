import { Component, OnInit, Output } from '@angular/core';

import { Item } from './entities/Item';

@Component({
  selector: 'app-title',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  movieList: Item[];

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'my-first-project';

  }
  toggleTable(show: boolean) {
    if (show) {
      this.movieList = [new Item({ name: 'Matrix', inStock: false, price: 8.99 }),
      new Item({ name: 'Inception', inStock: true, price: 12.99 }),
      new Item({ name: 'Avengers', inStock: true, price: 6.99 })];
    } else {
      this.movieList = [];
    }
  }
}
