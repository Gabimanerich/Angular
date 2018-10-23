import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

   constructor(private formBuilder: FormBuilder,
               private router: Router) { }

    LogOn() {
        localStorage['token'] = '123';
        this.router.navigate(['protegido']);
            }

     ngOnInit(): void {
       this.loginForm = this.formBuilder.group({
           email: ['Gabriela@estudante', Validators.required],
           password: ['123', Validators.required]
       });
   }
   fazerLogin() {
     const email = this.loginForm.get('email').value;
     const password = this.loginForm.get('password').value;

     if(email =="Gabriela@estudante" && password =='123'){
       this.router.navigate(['protegido']);
     }else{
       alert('Login ou senha incorretos');
       this.router.navigate(['login']);
     }
  
  }

}
