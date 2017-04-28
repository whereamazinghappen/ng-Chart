import { Injectable } from '@angular/core';
import { Router, CanActivate, } from '@angular/router';
import { UserService } from '../shared/service/user/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AccessGuard implements CanActivate {
    constructor(private route:Router,private userService:UserService) { }

    canActivate(): Observable<boolean> | boolean {
        return this.userService.logined()
        .map(result => {
            console.log(result.logined);
            if (result.logined) {
                return true;
            }else{

                return false;
            }
        }
            )
        .catch(err=>{
            return Observable.of(false);
        })        
    }
}