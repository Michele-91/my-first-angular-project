import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UndertitleModule } from './undertitle/undertitle.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RandomComponent } from './random/random.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { HighlightDirective } from './highlight.directive';
import { NotDirective } from './not.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RandomComponent,
    MenuComponent,
    AdminComponent,
    LoginComponent,
    HighlightDirective,
    NotDirective
  ],
  imports: [
    BrowserModule,
    UndertitleModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
