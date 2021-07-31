import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class JobSeekerSignupService {

  private apiUrl = "http://localhost:5001/api/";

  constructor(private formBuilder:FormBuilder,private http: HttpClient) 
  {}

  formModel = this.formBuilder.group({
   
    username: ['', Validators.required],
    password : ['', [Validators.required, Validators.minLength(5)]],
    password2 : ['', [Validators.required, Validators.minLength(5)]],
    email : ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    gender: ['', Validators.required],
    mobilenum: ['', Validators.required],
    address: ['', Validators.required],
  });

  signupUserInService(){

    // alert("sign up user");
 
     var body = {
       "UserName" : this.formModel.value.username,
       "Email" : this.formModel.value.email,
       "Password" : this.formModel.value.password,
       "RePassword" : this.formModel.value.password2,
       "FirstName" : this.formModel.value.firstname,
       "LastName" : this.formModel.value.lastname,
       "Gender" : this.formModel.value.gender,
       "MobileNum" : this.formModel.value.mobilenum,
       "Address" : this.formModel.value.address,

     }
 

       return this.http.post<boolean>(this.apiUrl+"jobseekerauth/add", body);
   }
}
