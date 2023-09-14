import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !:FormGroup;
constructor(
  private auth:AuthService,
  private fb:FormBuilder,
  private route:Router,
  // private snack:MatSnackBar
  ){
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: new FormControl('',[Validators.required,Validators.min(6)]),
   },{updateOn:'submit'})
  }

login(){
  const {email,password} = this.loginForm.value;
  return this.auth.Login(email,password).then(()=>{
    this.route.navigate(['dash/home']);
    console.log(email);
  },err =>{
    
    // this.snack.open(err.message),{
    //   duration: 300,
    //   verticalPosition: "top",
      
      
    // };
  });
}
}
