import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {Job} from "src/app/models/jobpost"
import { EmployerAuth } from '../models/employerauth';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = "http://localhost:5001/api/";
  employerAuth: EmployerAuth | any ;
  userName: string | any ;


  constructor(private formBuilder:FormBuilder,private formBuilder1:FormBuilder,private http: HttpClient) { }

  formModel = this.formBuilder.group({
   
    jobtitle : ['', Validators.required],
    jobtype: ['', Validators.required],
    vacancy: ['', Validators.required],
    employmentstatus: ['', Validators.required],
    experience: ['', Validators.required],
    gender: ['', Validators.required],
    salary: ['', Validators.required],
    age: ['', Validators.required],
    joblocation: ['', Validators.required],
    deadline: ['', Validators.required],
    jobdetails: ['', Validators.required],
    
  });

  formModel1 = this.formBuilder1.group({
    jobid : ['', Validators.required],
    jobtitle : ['', Validators.required],
    jobtype: ['', Validators.required],
    vacancy: ['', Validators.required],
    employmentstatus: ['', Validators.required],
    experience: ['', Validators.required],
    gender: ['', Validators.required],
    salary: ['', Validators.required],
    age: ['', Validators.required],
    joblocation: ['', Validators.required],
    deadline: ['', Validators.required],
    jobdetails: ['', Validators.required],
  });

  createJobService(){

      this.employerAuth = localStorage.getItem('user') ;
      this.employerAuth = JSON.parse(this.employerAuth);

    // alert("log in employer");
 
     var body = {
       "EmployerId":this.employerAuth.id,
        "JobTitle" : this.formModel.value.jobtitle,
        "JobType" : this.formModel.value.jobtype,
        "Vacancy" : this.formModel.value.vacancy,
        "EmploymentStatus" : this.formModel.value.employmentstatus,
        "Experience" : this.formModel.value.experience,
        "Gender" : this.formModel.value.gender,
        "Age" : this.formModel.value.age,
        "JobLocation" : this.formModel.value.joblocation,
        "Salary" : this.formModel.value.salary,
        "Deadline" : this.formModel.value.deadline,
        "JobDetailsFilePath" : this.formModel.value.jobdetails
     }


     if(this.formModel.value.jobtitle !=null){
      // alert("job title = " + this.formModel.value.jobtitle);
      return this.http.post<boolean>(this.apiUrl+"job/add", body) ;

     }

     else{
        alert("give a job title.")
     }
     
   }


  updateJobService(job : Job){

     var body2 = {
        "Id" : job.id,
        "EmployerId":this.employerAuth.id,
        "JobTitle" : this.formModel1.value.jobtitle,
        "JobType"  : this.formModel1.value.jobtype,
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
       //alert("job title = " + this.formModel1.value.jobtitle);
      return this.http.post<boolean>(this.apiUrl+"job/update", body2) ;

     }

     else{
        alert("give a job title.")
     }
   }


   deleteJobService(jobid : any){
    //alert("deleteJob = "+jobid);
    return this.http.delete<any>(this.apiUrl+"job/delete",{params:{"jobId":jobid}});
   }

   getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>("http://localhost:5001/api/job/getAll");
   }

   getJobsByEmployerId(): Observable<Job[]>{
    this.employerAuth = localStorage.getItem('user') ;
    this.employerAuth = JSON.parse(this.employerAuth);
    return this.http.get<Job[]>("http://localhost:5001/api/job/getAllByEmployerId",{params:{"employerId" : this.employerAuth.id}});
   }


   public getJobsBysearchKey(jobTitle : string): Observable<Job[]>{
    
    return this.http.get<Job[]>(this.apiUrl+"job/getByJobTitle?jobTitle="+jobTitle);
   }

   
  
}
