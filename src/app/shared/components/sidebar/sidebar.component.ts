import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink, CommonModule]
})
export class NavbarComponent implements OnInit {
  private routes = inject(Router);
  private _userService = inject(UserService);
  public currentRoute = '';

  ngOnInit(): void {}

  constructor() {
    this.routes.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const segments = event.url.split('/');
        const secondWord = segments[2];
        if (!secondWord) {
          this.currentRoute = 'Dashboard';
      
        }
        else {
        this.currentRoute = secondWord;
        
      }
    }
  });
  }

  goBack() {
    window.history.back();
  }

  logOut() {
    this._userService.logout();
  }
}
