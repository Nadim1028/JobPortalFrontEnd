import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = "http://localhost:5001/api/";

  constructor(private formBuilder:FormBuilder,private http: HttpClient) 
  {}

  formModel = this.formBuilder.group({
   
    username: ['', Validators.required],
    
    password : ['', [Validators.required, Validators.minLength(5)]],

    password2 : ['', [Validators.required, Validators.minLength(5)]],

    email : ['', Validators.required]
  });



  signupUserInService(){

    // alert("sign up user");
 
     var body = {
       "UserName" : this.formModel.value.username,
       "Email" : this.formModel.value.email,
       "Password" : this.formModel.value.password,
       "RePassword" : this.formModel.value.password2

     }
 
    //  if( this.formModel.value.username=="admin" && this.formModel.value.password=="nadim123")
    //  {
    //    alert("admin");
    //    return this.http.post<boolean>(this.apiUrl+"admin/login", body);
 
    //  }
      
    //  else{

       return this.http.post<boolean>(this.apiUrl+"jobseekerauth/add", body);
   }


  
}
