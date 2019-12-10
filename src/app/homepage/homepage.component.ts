import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnderStringService } from './../services/underString.service';
import { VisitCounterService } from '../services/visitCounter.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  id: any;
  title = 'This is the Homepage';

  constructor(public activatedRoute: ActivatedRoute, public str: UnderStringService, public counter: VisitCounterService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.str.underString = this.title;
  //   setInterval(() => {
  //     this.counter.count++;
  // }, 1000);
  }

  resetCounter() {
    this.counter.resetCounter();
  }

}
