import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../entities/Item';
import { Router } from '@angular/router';
import { UnderStringService } from '../services/underString.service';
import { VisitCounterService } from '../services/visitCounter.service';
import { TableSelect } from '../services/buttonSelection.service';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-undertitle',
  templateUrl: './undertitle.component.html',
  styleUrls: ['./undertitle.component.css']
})
export class UndertitleComponent implements OnInit {

  underTitle: string;
  totalPrice: number;
  id: any;
  title = 'This is the underTitle Page';
  selectedTable: number;
  movieList: Item[];


  constructor(public router: Router, 
              public str: UnderStringService, 
              public counter: VisitCounterService, 
              public allow: TableSelect) {
  }

  ngOnInit() {
    this.allow.subject.pipe(takeUntil(this.allow.notifier)).subscribe((show: boolean) => { this.toggleTable(show) });
    this.underTitle = 'Learning how to code with Angular';
    this.str.underString = this.title;
  }

  toggleTable(show: boolean) {
    if (show) {
      if (this.allow.show1) {
        this.movieList = [new Item({ name: 'Matrix', inStock: false, price: 8.99 }),
        new Item({ name: 'Inception', inStock: true, price: 12.99 }),
        new Item({ name: 'Avengers', inStock: true, price: 6.99 })];
      } else {
        this.movieList = [new Item({ name: 'Iron Man', inStock: true, price: 4.99 }),
        new Item({ name: '2001 - space odissey', inStock: false, price: 6.99 }),
        new Item({ name: 'Planet of the Apes', inStock: true, price: 2.99 })]
      }
    } else {
      this.movieList = [];
    }
  }


  returnToHome() {
    this.router.navigate(['/homepage', { id: this.underTitle }]);
  }

  resetCounter() {
    this.counter.resetCounter();
  }

  ngOnDestroy(): void {
    this.allow.notifier.next();
  }

}
