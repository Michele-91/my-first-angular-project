import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../entities/Item';

@Component({
  selector: 'app-undertitle',
  templateUrl: './undertitle.component.html',
  styleUrls: ['./undertitle.component.css']
})
export class UndertitleComponent implements OnInit {

  underTitle: string;
  totalPrice: number;

  @Input()
  movie: Item[];

  @Output()
  hideShow = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.underTitle = 'Learning how to code with Angular';
    // tslint:disable-next-line:max-line-length
    // this.totalPrice = this.movie.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  displayTable(show: boolean) {
    this.hideShow.emit(show);
  }
  // toggleTable(show) {

  // }

}
