import { Injectable } from '@angular/core';
// import { AuthenticationService } from '../../shared/services/authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        // private authenticationService: AuthenticationService,
        private router: Router
    ) {}

    // Add this method to validade the canLoad
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate();
    }  

    canActivate(
        // route: ActivatedRouteSnapshot, 
        // state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        
        // const isAuthenticated = this.authenticationService.getIsAuthenticated();
        // if (!isAuthenticated) {
        //     console.log("!!! " + isAuthenticated);
        //     this.router.navigate(['/login']);
        // }

        // return isAuthenticated; // return true or false

        return true
    }
    
    canActivateChild(
        // route: ActivatedRouteSnapshot, 
        // state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate();
    }   

}