import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.html',
})
export class RegisterComponent{
  ngOnInit(): void {
  }

  constructor(private userService:UserService, private router:Router) {}

  regiserUser(e){
    e.preventDefault(); 

    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    var retypedPassword = e.target.elements[2].value;

    if(username=="" || password=="" || retypedPassword==""){
      return;
    }

    if(password!=retypedPassword){
      return;
    }

    if(this.userService.isUserExistent(username, password)){
      console.log("User already exists.");
      return;
    }
    
    this.userService.registerNewUser(username, password);
    

    return;
  }
}
