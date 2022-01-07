import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  implements OnInit{
 
  constructor(private authService: AuthService, private router: Router ) { }
  ngOnInit(){
    this.authStatus = this.authService.isAuth;
  }


  authStatus: boolean | undefined;

onSignIn(){
  this.authService.signIn().then(
    
  )
}







//  onSignIn() {
//    this.authService.signIn().then(
//      () => {
//        console.log('Sign in successful!');
//        this.authStatus=this.authService.isAuth;
//        this.router.navigate(['machines']);
//      }
//    );
//  }

//  onSignOut() {
//    this.authService.signOut();
//    this.authStatus = this.authService.isAuth;
//  }

}
