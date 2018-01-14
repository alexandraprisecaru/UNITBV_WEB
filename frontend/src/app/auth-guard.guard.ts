import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './service/user.service';
import { Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private userService: UserService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
  	if (!this.userService.getUserLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
}
}
