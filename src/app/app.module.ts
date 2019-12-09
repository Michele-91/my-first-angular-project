import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UndertitleModule } from './undertitle/undertitle.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RandomComponent } from './random/random.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
// import { ModHomepageComponent } from './mod-homepage/mod-homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RandomComponent,
    MenuComponent,
    // ModHomepageComponent
  ],
  imports: [
    BrowserModule,
    UndertitleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
