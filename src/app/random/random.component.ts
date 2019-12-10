import { Component, OnInit } from '@angular/core';
import { UnderStringService } from '../services/underString.service';
import { VisitCounterService } from '../services/visitCounter.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  title = 'This is a Random pic Page';

  constructor(public str: UnderStringService, public counter: VisitCounterService) { }

  ngOnInit() {
    setTimeout(() => {
      this.str.underString = this.title;
    }, 2000);
  //   setInterval(() => {
  //     this.counter.count++;
  // }, 1000);
  }

  resetCounter() {
    this.counter.resetCounter();
  }

}
