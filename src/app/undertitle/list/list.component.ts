import { Component, OnInit, Input, Output } from '@angular/core';

import { Item } from '../../entities/Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private _movie: Item[];

  totalPrice: number;

  get movie(): Item[] {
    return this._movie;
  }
  
  @Input()
  set movie(value: Item[]) {
    this._movie = value;
    if(value) {
      this.totalPrice = this.movie.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
  }
    
  // get totalPrice() {
  //   if(this.movie) {
  //     return this.movie.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //   }
  // }
  
  constructor() { 
  }
  
  ngOnInit() {
  }
}
