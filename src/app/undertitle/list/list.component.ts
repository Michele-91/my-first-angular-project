import { Component, OnInit, Input, Output } from '@angular/core';

import { Item } from '../../entities/Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input()
  movie: Item[];

  ngOnInit() {
  }

}
