import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {filter, map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AutologinGuard implements CanLoad {
  constructor(
    private authService : AuthenticationService,
    private router : Router,
  ){}
  canLoad(): Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null),
      take(1),
      map(isAuthenticated => {
        // console.log('GUARD :', isAuthenticated);
        if (isAuthenticated)
        {
          this.router.navigateByUrl('/base', {replaceUrl:true});
          return false
        } else {
          this.router.navigateByUrl('/login', {replaceUrl:true});
          return true
        }
      })
    )
  }
}
