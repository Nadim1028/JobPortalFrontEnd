import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';
import { JobSeekerAuth } from '../models/jobseekerauth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobseekerLoginService {

  private apiUrl = "http://localhost:5001/api/";
  jobseekerAuth: JobSeekerAuth | any ;


  constructor(private formBuilder:FormBuilder,private http: HttpClient) { }

  formModel = this.formBuilder.group({
   
    username: ['', Validators.required],
    
    password : ['', [Validators.required, Validators.minLength(5)]]
    
  });

  formModelJobseeker =this.formBuilder.group({
   
    email: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    mobilenum: ['', Validators.required],
        
  });

  
  loginUser(){

    // alert("log in jobseeker");
 
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
       return this.http.post<boolean>(this.apiUrl+"jobseekerauth/login", body);
     }
       
   }

   updateJobSeeker(){
    this.jobseekerAuth = localStorage.getItem('user') ;
    this.jobseekerAuth = JSON.parse(this.jobseekerAuth);

    var body = {
    "Id" :this.jobseekerAuth.id,
    "UserName" : this.jobseekerAuth.userName,
    "Email" : this.formModelJobseeker.value.email,
    "Password" :this. jobseekerAuth.password,
    "RePassword" : this.jobseekerAuth.rePassword,
    "FirstName" : this.formModelJobseeker.value.firstname,
    "LastName" : this.formModelJobseeker.value.lastname,
    "Gender" : this.formModelJobseeker.value.gender,
    "Address" : this.formModelJobseeker.value.address,
    "MobileNum" : this.formModelJobseeker.value.mobilenum,
    }

  return this.http.post<boolean>(this.apiUrl+"jobseekerauth/update", body);
   }


   getJobSeekerAuths(): Observable<JobSeekerAuth[]>{
    return this.http.get<JobSeekerAuth[]>(this.apiUrl+"jobseekerAuth/getAll");
   }

   
   deleteJobSeeker(jobseekerId : any){
    //alert("deleteJob = "+employerId);
    return this.http.delete<any>(this.apiUrl+"jobseekerAuth/delete",{params:{"jobseekerAuthId":jobseekerId}});
   }

}
