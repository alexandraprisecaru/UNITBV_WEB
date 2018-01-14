import { Component, OnInit} from '@angular/core';
import { UserService } from '../service/user.service'
import { Router } from '@angular/router';
import { AuthGuard } from '../auth-guard.guard';

@Component({
  templateUrl: './logIn.html',
})
export class LogInComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(private router:Router, private userService:UserService){
  }

  loginUser(e){
    e.preventDefault(); 

    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(username=="" || password==""){
      return;
    }

    if(this.userService.isUserExistent(username, password)){
      this.userService.setUserLoggedIn;
      console.log("existent");
      this.router.navigate([""]);
    }

    return;
  }
}
