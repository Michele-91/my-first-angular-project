import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndertitleComponent } from '../undertitle/undertitle.component';
import { ListComponent } from './list/list.component';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';



@NgModule({
  declarations: [UndertitleComponent, ListComponent, ButtonComponent, Button2Component],
  imports: [
    CommonModule
  ],
  exports: [ UndertitleComponent, ListComponent, ButtonComponent, Button2Component ]
})
export class UndertitleModule {


}
