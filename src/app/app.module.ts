import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UndertitleModule } from './undertitle/undertitle.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RandomComponent } from './random/random.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
// import { FormComponent } from './undertitle/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RandomComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    UndertitleModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
