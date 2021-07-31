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

    email : ['', Validators.required],
    companyname : ['', Validators.required],
    companyaddress : ['', Validators.required],
    industrytype : ['', Validators.required],
    companycontact : ['', Validators.required],
    yearofestablishment : ['', Validators.required],
    tradelicense : ['', Validators.required],
  })


  signupUserInService(){

    // alert("sign up user");
 
     var body = {
       "UserName" : this.formModel.value.username,
       "CompanyEmail" : this.formModel.value.email,
       "Password" : this.formModel.value.password,
       "RePassword" : this.formModel.value.password2,
       "CompanyName" : this.formModel.value.companyname,
       "CompanyAddress" : this.formModel.value.companyaddress,
       "IndustryType" : this.formModel.value.industrytype,
       "CompanyContactNo" : this.formModel.value.companycontact,
       "YearOfEstablishment" : this.formModel.value.yearofestablishment,
       "TradeLicenseNo" : this.formModel.value.tradelicense,

     }
 
    
       return this.http.post<boolean>(this.apiUrl+"employerauth/add", body);
   }


  
}
