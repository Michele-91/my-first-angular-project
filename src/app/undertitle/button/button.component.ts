import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  show = false;

  constructor() { }

  @Output()
  hideShow = new EventEmitter();

  ngOnInit() {
  }

  displayTable() {
    this.show = !this.show;
    this.hideShow.emit(this.show);
  }

}
