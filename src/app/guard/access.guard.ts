import { Injectable, ViewContainerRef } from '@angular/core';
import { Router, CanActivate, } from '@angular/router';
import { UserService } from '../shared/service/user/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { LoginComponent } from "app/login/login.component";

@Injectable()
export class AccessGuard implements CanActivate {
    constructor(private route:Router,private userService:UserService) { }

    canActivate(): Observable<boolean> | boolean {
        this.userService.showLoginDialog(true);
                return false;
        // return this.userService.logined()
        // .map(result => {
        //     console.log(result.logined);
        //     if (result.logined) {
        //         return true;
        //     }else{
        //         this.userService.showDialog();
        //         return false;
        //     }
        // }
        //     )
        // .catch(err=>{
        //     return Observable.of(false);
        // })        
    }
}