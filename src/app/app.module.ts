import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UndertitleModule } from './undertitle/undertitle.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UndertitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
