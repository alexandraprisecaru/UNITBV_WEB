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
      console.log("Fields cannot be empty");
      return;
    }

    if(!this.userService.isUserExistent(username, password) && this.userService.isUserNameTaken(username)){
      console.log("User name already taken");
      return; 
    }
    
    if(password!=retypedPassword){
      console.log("Passwords don't match");
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
