import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFireFunctions} from '@angular/fire/compat/functions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth,private func:AngularFireFunctions,private route:Router) { }

  Login(email:string,password:string){

    return this.auth.signInWithEmailAndPassword(email,password);
  }
  Logout(){

    return this.auth.signOut().then(()=>{
      
      return this.route.navigate(['login'])
    });
  }
  CreateUser(email:string,password:string){

    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  changePwd(){
    // return this.auth.sendPasswordResetEmail();
  }
  makeAdmin(mail:any){
    const addRoleAdmin = this.func.httpsCallable('addRoleAdmin');
    return addRoleAdmin({email:mail});
  }
}
