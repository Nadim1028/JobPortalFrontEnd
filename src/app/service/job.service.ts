import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = "http://localhost:5001/api/";
  constructor(private formBuilder:FormBuilder,private formBuilder1:FormBuilder,private http: HttpClient) { }

  formModel = this.formBuilder.group({
   
    jobtitle: ['', Validators.required],
    jobdetails: ['', Validators.required],
    vacancy: ['', Validators.required],
    employmentstatus: ['', Validators.required],
    experience: ['', Validators.required],
    gender: ['', Validators.required],
    salary: ['', Validators.required],
    age: ['', Validators.required],
    joblocation: ['', Validators.required],
    deadline: ['', Validators.required],
    
  });

  formModel1 = this.formBuilder1.group({
    jobid : ['', Validators.required],
    jobtitle: ['', Validators.required],
    jobdetails: ['', Validators.required],
    vacancy: ['', Validators.required],
    employmentstatus: ['', Validators.required],
    experience: ['', Validators.required],
    gender: ['', Validators.required],
    salary: ['', Validators.required],
    age: ['', Validators.required],
    joblocation: ['', Validators.required],
    deadline: ['', Validators.required],
    
  });

  createJobService(){

    // alert("log in employer");
 
     var body = {
        "JobTitle" : this.formModel.value.jobtitle,
        "JobDetails" : this.formModel.value.jobdetails,
        "Vacancy" : this.formModel.value.vacancy,
        "EmploymentStatus" : this.formModel.value.employmentstatus,
        "Experience" : this.formModel.value.experience,
        "Gender" : this.formModel.value.gender,
        "Age" : this.formModel.value.age,
        "JobLocation" : this.formModel.value.joblocation,
        "Salary" : this.formModel.value.salary,
        "Deadline" : this.formModel.value.deadline
     }


     if(this.formModel.value.jobtitle !=null){
       alert("job title = " + this.formModel.value.jobtitle);
      return this.http.post<boolean>(this.apiUrl+"job/add", body) ;

     }

     else{
        alert("give a job title.")
     }
     
   }


  updateJobService(){

    // alert("log in employer");
 
     var body2 = {
        "Id" : this.formModel1.value.jobid,
        "JobTitle" : this.formModel1.value.jobtitle,
        "JobDetails" : this.formModel1.value.jobdetails,
        "Vacancy" : this.formModel1.value.vacancy,
        "EmploymentStatus" : this.formModel1.value.employmentstatus,
        "Experience" : this.formModel1.value.experience,
        "Gender" : this.formModel1.value.gender,
        "Age" : this.formModel1.value.age,
        "JobLocation" : this.formModel1.value.joblocation,
        "Salary" : this.formModel1.value.salary,
        "Deadline" : this.formModel1.value.deadline
     }


     if(body2 !=null){
       alert("job title = " + this.formModel1.value.jobtitle);
      return this.http.post<boolean>(this.apiUrl+"job/update", body2) ;

     }

     else{
        alert("give a job title.")
     }
   }
  
}
