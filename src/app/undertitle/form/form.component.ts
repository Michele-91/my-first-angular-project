import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tableForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    inStock: new FormControl(''),
    price: new FormControl('', [Validators.min(1), Validators.required]),
    date: new FormControl('')
  });

  @Output()
  thirdTable = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.thirdTable.emit(this.tableForm.value);
    // this.thirdTable.emit(value);
  }

}
