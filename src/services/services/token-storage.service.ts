import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ROLE = 'auth-role';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private router: Router) { }

    signOut(): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.clear();
        this.router.navigate(['register']);
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public getRights(right: string): any {
        const user_roles = window.sessionStorage.getItem(USER_ROLE);
        if (user_roles) {
            const roles = JSON.parse(user_roles);
            for (var i = 0; i < roles.length; i++){
                var obj = roles[i];
                for (var key in obj){
                  var value = obj[key];
                  if (value == right) {
                      return true;
                  }
                }
              }
        }
        return false;
    }

    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        window.sessionStorage.setItem(USER_ROLE, JSON.stringify(user.roles));
    }

    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
