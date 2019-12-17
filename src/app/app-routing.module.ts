import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UndertitleComponent } from './undertitle/undertitle.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RandomComponent } from './random/random.component';
import { UndertitleModule } from './undertitle/undertitle.module';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'homepage/:id', component: HomepageComponent},
  { path: 'undertitle', component: UndertitleComponent},
  { path: 'random', component: RandomComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'homepage', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    UndertitleModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
