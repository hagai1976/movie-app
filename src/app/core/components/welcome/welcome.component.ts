import { Component, OnInit, AfterContentInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter, tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterContentInit {

  private readonly onDestroy = new Subject<void>();

  header: string;

  constructor(
    public layoutService: LayoutService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.router.events.pipe(
      takeUntil(this.onDestroy),
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      tap(() => {

        let url = this.location.path().split('/').pop();
        this.switchHeader(url);

      })
    ).subscribe();

  }


  ngAfterContentInit(): void {
    let url = this.location.path().split('/').pop();
    this.switchHeader(url);
  }


  switchHeader(url) {

    switch (url) {
      case 'login':
        this.header = 'כניסת משתמשים';
        break;

      case 'forgot-password':
        this.header = 'שכחתי סיסמה';
        break;
    }

    if (this.location.path().split('/').includes('reset-password')) {
      this.header = 'שחזור סיסמה';
    }

  }


  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

}
