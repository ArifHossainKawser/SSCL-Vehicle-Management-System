import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private route: Router, private auth: BackendService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      if(!this.auth.authenticated){
        this.route.navigate(['']);
        return false;
      }
    return true;
  }

}
