import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndertitleComponent } from '../undertitle/undertitle.component';
import { ListComponent } from './list/list.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [UndertitleComponent, ListComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ UndertitleComponent, ListComponent, ButtonComponent ]
})
export class UndertitleModule {


}
