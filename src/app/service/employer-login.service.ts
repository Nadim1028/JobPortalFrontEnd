import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';
import { EmployerAuth } from '../models/employerauth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://localhost:5001/api/";
  employerAuth: EmployerAuth | any ;

  constructor(private formBuilder:FormBuilder,private http: HttpClient) { }

  formModel = this.formBuilder.group({
   
    username: ['', Validators.required],
    
    password : ['', [Validators.required, Validators.minLength(5)]]
    
  });

  formModelEmployer = this.formBuilder.group({
   
    username: ['', Validators.required],
    companyemail: ['', Validators.required],
    password : ['', [Validators.required, Validators.minLength(5)]],
    repassword : ['', [Validators.required, Validators.minLength(5)]],
    companyname: ['', Validators.required],
    companyadd: ['', Validators.required],
    industrytype: ['', Validators.required],
    companycontactno: ['', Validators.required],
    year: ['', Validators.required],
    tradelicense: ['', Validators.required],

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

  updateEmployer()
  {

      this.employerAuth = localStorage.getItem('user') ;
      this.employerAuth = JSON.parse(this.employerAuth);

      var body = {
      "Id" :this.employerAuth.id,
      "UserName" : this.employerAuth.userName,
      "CompanyEmail" : this.formModelEmployer.value.companyemail,
      "Password" :this. employerAuth.password,
      "RePassword" : this.employerAuth.rePassword,
      "CompanyName" : this.formModelEmployer.value.companyname,
      "CompanyAddress" : this.formModelEmployer.value.companyadd,
      "IndustryType" : this.formModelEmployer.value.industrytype,
      "CompanyContactNo" : this.formModelEmployer.value.companycontactno,
      "YearOfEstablishment" : this.formModelEmployer.value.year,
      "TradeLicenseNo" : this.formModelEmployer.value.tradelicense,
      }

    return this.http.post<boolean>(this.apiUrl+"employerauth/update", body);
  }

  getEmployersAuths(): Observable<EmployerAuth[]>{
    return this.http.get<EmployerAuth[]>(this.apiUrl+"employerauth/getAll");
   }

   

   deleteEmployer(employerId : any){
    //alert("deleteJob = "+employerId);
    return this.http.delete<any>(this.apiUrl+"employerAuth/delete",{params:{"employerAuthId":employerId}});
   }

 
}


