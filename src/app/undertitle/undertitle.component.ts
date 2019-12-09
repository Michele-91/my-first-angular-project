import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../entities/Item';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-undertitle',
  templateUrl: './undertitle.component.html',
  styleUrls: ['./undertitle.component.css']
})
export class UndertitleComponent implements OnInit {

  underTitle: string;
  totalPrice: number;
  id: any;

  @Input()
  movieList: Item[];


  constructor(public router: Router, public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.underTitle = 'Learning how to code with Angular';
    this.id = this.activatedRoute.snapshot.params.id;
    // this.id = this.underTitle;
    // tslint:disable-next-line:max-line-length
    // this.totalPrice = this.movie.map((item) => item.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
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

  returnToHome(id: any) {
    this.router.navigate(['/homepage', {id: this.underTitle}]);
  }
}
