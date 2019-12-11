import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableSelect } from 'src/app/services/buttonSelection.service';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {

  constructor(public allow: TableSelect) { 
    
  }

  get show() {
    return this.allow.show2;
  }

  set show(value) {
      this.allow.show2 = value;
      if (value) {
        this.allow.show1 = false;
      }
  }

  @Output()
  hideShow = new EventEmitter<boolean>();

  ngOnInit() {
  }

  displayTable() {
    this.show = !this.show;
    // this.hideShow.emit(this.show);
    this.allow.subject.next(this.show);
  }

}
