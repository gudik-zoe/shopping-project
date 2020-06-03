import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Custome} from '../registration/custome.validator'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private fb:FormBuilder , 
    private service:AuthService , 
    private route:Router) { }

  

  formError = false
signUpForm : FormGroup

signInForm:FormGroup
name
signIn = true
loading = false
errorMessage
error = false
loggedIn = []
signUpsuccess = false



toStore(){
  this.route.navigate(['products'])
}

switch(){
  this.signIn = !this.signIn
}
closeError(){
  this.error = false
  this.signInForm.reset()
  this.signUpForm.reset()
}
toSignIn(){
  this.signIn = true
  this.signUpsuccess = false
}

submit(){
  this.loading = true 
 if (!this.signIn){
    let email = this.signUpForm.get('email').value
   let password = this.signUpForm.get('password').value
  this.service.signUp(email , password).subscribe(
  data => {
    this.loading = false
    this.signUpsuccess = true
    console.log('succeed')
   
  },
  error=> {
    console.log(error)
    this.loading = false
    this.error = true
    if(error.error.error.message == 'EMAIL_EXISTS'){
      this.errorMessage ='the mail already exists'
      }

      else {
        this.error = true 
        this.errorMessage = 'unknown error occured'
      }
  }
)

}
else {
  this.loading = true 
  let email = this.signInForm.get('email').value
  let password = this.signInForm.get('password').value
  this.service.signIn(email,password).subscribe(data => {
    this.loading = false
     this.loggedIn.push(email)
    console.log('it worked ')
  }
  ,error => {
      this.loading = false
      this.error = true 
      console.log('error')
 
      if (error.error.error.message == 'EMAIL_NOT_FOUND'){
        this.errorMessage = 'email not found!'
    }
    else if (error.error.error.message == 'INVALID_PASSWORD'){
        this.errorMessage = 'incorrect password!'
    }
    else {
    this.errorMessage = 'unknown error occured make sure you entered the correct credentials'
    }
  })
  }
}


  



  ngOnInit() {
    this.loggedIn = this.service.get()
    this.signUpForm =this.fb.group({
      // name:['',Validators.required],
      // lastName:['',Validators.required],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required , Validators.minLength(6)]],
      confirmPassword:['' , Validators.required]
},{validator : [Custome.confirmation]})

this.signInForm =this.fb.group({
  email:['' , [Validators.required , Validators.email]],
  password:['' , [Validators.required , Validators.minLength(6)]],
  })
}

}

