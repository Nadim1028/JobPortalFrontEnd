import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://localhost:5001/api/";

  constructor(private formBuilder:FormBuilder,private http: HttpClient) { }

  formModel = this.formBuilder.group({
   
    username: ['', Validators.required],
    
    password : ['', [Validators.required, Validators.minLength(5)]]
    
  });



  loginUser(){

   // alert("log in employer");

    var body = {
      "UserName" : this.formModel.value.username,
      "Password" : this.formModel.value.password
    }

    if( this.formModel.value.username=="admin" && this.formModel.value.password=="nadim123")
    {
      alert("admin");
      return this.http.post<boolean>(this.apiUrl+"admin/login", body);

    }
     
    else{
      return this.http.post<boolean>(this.apiUrl+"employerauth/login", body);
    }
      
  }

}


