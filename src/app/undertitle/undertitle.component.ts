import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Item } from '../entities/Item';
import { Router } from '@angular/router';
import { UnderStringService } from '../services/underString.service';
import { VisitCounterService } from '../services/visitCounter.service';
import { TableSelect } from '../services/buttonSelection.service';
import { takeUntil } from 'rxjs/operators';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ListComponent } from './list/list.component';



@Component({
  selector: 'app-undertitle',
  templateUrl: './undertitle.component.html',
  styleUrls: ['./undertitle.component.css']
})
export class UndertitleComponent implements OnInit, OnDestroy {

  bsModalRef: BsModalRef;

  underTitle: string;
  id: any;
  title = 'This is the underTitle Page';
  // movieList: Item[];
  customList: Item[] = [];
  movieList1: Item[] = [
    new Item({ name: 'Matrix', inStock: false, price: 8.99 , date: new Date(2001, 5, 3) }),
    new Item({ name: 'Inception', inStock: true, price: 12.99, date: new Date(2014, 2, 20) }),
    new Item({ name: 'Avengers', inStock: true, price: 6.99, date: new Date(2017, 12, 10) })
  ];
  movieList2: Item[] = [
    new Item({ name: 'Iron Man', inStock: true, price: 4.99, date: new Date(2015, 10, 8)}),
    new Item({ name: '2001 - space odissey', inStock: false, price: 6.99, date: new Date(1992, 4, 30)}),
    new Item({ name: 'Planet of the Apes', inStock: true, price: 2.99, date: new Date(1978, 11, 23)})
  ];

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(ListComponent);
  }


  constructor(public router: Router,
              public str: UnderStringService,
              public counter: VisitCounterService,
              public allow: TableSelect,
              public modalService: BsModalService) {
  }



  ngOnInit() {
    this.allow.subject.pipe(takeUntil(this.allow.notifier)).subscribe((show: boolean) => { this.toggleTable(show); });

    this.underTitle = 'Learning how to code with Angular';
    this.str.underString = this.title;
  }

  toggleTable(show: boolean) {
    if (show) {
      if (this.allow.show1) {
        this.openModalWithComponent();
        this.allow.movieList.next([...this.movieList1, ...this.customList]);
      } else {
        // this.allow.movieList.next(this.movieList);
        this.openModalWithComponent();
        this.allow.movieList.next([...this.movieList2, ...this.customList]);
      }
      // this.bsModalRef = this.modalService.show(ListComponent, {});
      // this.bsModalRef.content.closeBtnName = 'Close';
    } else {
      // this.movieList = [];
      this.allow.movieList.next();
    }
  }

  returnToHome() {
    this.router.navigate(['/homepage', { id: this.underTitle }]);
  }

  resetCounter() {
    this.counter.resetCounter();
  }

  addThird(tableValue: Item) {
    this.customList.push(tableValue);
    // console.warn(this.customList);
  }

  ngOnDestroy(): void {
    this.allow.notifier.next();
  }

}
