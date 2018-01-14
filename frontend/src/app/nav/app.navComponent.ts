import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';
import { UserService } from '../service/user.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.html',
  styleUrls: ['../app.component.less']
})
export class NavComponent{
  ngOnInit(): void {
  }

  constructor(private userService:UserService) {

  }
  showLogIn=true;
  showSignUp=true;
  showLogOut=false;
  showUsername=this.userService.getUserName()!="";
}
