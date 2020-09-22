import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// SERVICES
import { LayoutService } from 'src/app/shared/services/layout.service';


// RXJS
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private readonly onDestroy = new Subject<void>();

  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
      public layoutService: LayoutService,
      private router: Router
    ) { }

  ngOnInit() {

  }


  submitLoginForm(loginForm: FormGroup) {
    console.log(loginForm);
    this.router.navigate(['/secure']);
  }



  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

}
