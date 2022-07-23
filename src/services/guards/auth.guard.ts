import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
    isSignedIn: boolean = false;

    constructor(private _router: Router,
        private _session: TokenStorageService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const user = this._session.getUser();
        const token = this._session.getToken();
        if (user != null && token != null) {
            this.isSignedIn = true;
        }

        if (this.isSignedIn !== true) {
            this._router.navigate(["/login"]);
        }
        return this.isSignedIn;
    }
}
