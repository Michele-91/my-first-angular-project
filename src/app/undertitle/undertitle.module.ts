import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndertitleComponent } from '../undertitle/undertitle.component';
import { ListComponent } from './list/list.component';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConditionPipe } from '../entities/custom-pipe.component';
// import { AdminComponent } from '../admin/admin.component';


@NgModule({
  declarations: [UndertitleComponent, ListComponent, ButtonComponent, Button2Component, FormComponent, ConditionPipe],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [ UndertitleComponent, ListComponent, ButtonComponent, Button2Component, FormComponent ],
  entryComponents: [
    UndertitleComponent, ListComponent
  ]
})
export class UndertitleModule {


}
