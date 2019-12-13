import { Component, OnInit, Input, Output } from '@angular/core';

import { Item } from '../../entities/Item';
import { TableSelect } from 'src/app/services/buttonSelection.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Item[];

  totalPrice: number;

  // get movie(): Item[] {
  //   return this._movie;
  // }

  // @Input()
  // set movie(value: Item[]) {
  //   this._movie = value;
  //   if(value) {
  //     this.totalPrice = this.movie.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //   }
  // }


  constructor(public allow: TableSelect) { 
  }


  ngOnInit() {
    this.allow.movieList.subscribe( (list: Item[]) => {
      this.movies = list;
      if(list) {
        this.totalPrice = list.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      } else {
        this.totalPrice = 0;
      }
    });
  }

}
