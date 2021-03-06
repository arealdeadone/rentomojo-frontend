import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }

}
