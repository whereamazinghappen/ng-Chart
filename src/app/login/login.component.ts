import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/service/user/user.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show:boolean = false;
  subscription:Subscription;
  constructor(private userService:UserService) {
    this.subscription = userService.isShowLoginDialog$.subscribe(isshow=>{
      this.show=isshow;
    })
   }
  closeDialog() {
    this.show = false;
  }
  ngOnInit() {
  }

}
