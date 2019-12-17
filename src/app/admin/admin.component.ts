import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  color: string;

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }


  logout() {
    this.message = 'Trying to log out...';

    this.authService.logout().subscribe(() => {
      this.setMessage();
      if (!this.authService.isLoggedIn) {
        // tslint:disable-next-line:prefer-const
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';
        this.router.navigateByUrl(redirect);
      }
      this.router.navigate(['/login']);
    });
    // this.setMessage();
  }

}
