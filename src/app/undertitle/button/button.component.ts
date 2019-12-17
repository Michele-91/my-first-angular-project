import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableSelect } from 'src/app/services/buttonSelection.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  get show() {
    return this.allow.show1;
  }

  set show(value) {
    this.allow.show1 = value;
    if (value) {
      this.allow.show2 = false;
    }
  }

  constructor(public allow: TableSelect) {
  }


  ngOnInit() {

  }

  displayTable() {
    this.show = !this.show;
    // this.hideShow.emit(this.show);
    this.allow.subject.next(this.show);
  }
}
