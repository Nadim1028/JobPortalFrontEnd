import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Job } from '../models/jobpost';
import { JobSeekerAuth } from '../models/jobseekerauth';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  job : Job | any;
  jobseekerAuth: JobSeekerAuth | any ;
  private apiUrl = "http://localhost:5001/api/";
  constructor(private formBuilder:FormBuilder,private http: HttpClient) { }


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


  postFile(fileToUpload: File):

    Observable<boolean> {

      var body = {
        
      }

      const endpoint = 'your-destination-url';
      const formData: FormData = new FormData();
      formData.append('fileKey', fileToUpload, fileToUpload.name);
     
      return this.http.post<boolean>(this.apiUrl+"job/add", body)

  }
    //return this.http.post<boolean>(this.apiUrl+"job/add", body)

    apply(job : Job){

      this.jobseekerAuth = localStorage.getItem('user') ;
      this.jobseekerAuth = JSON.parse(this.jobseekerAuth);

      console.log(this.jobseekerAuth);

      var body = {
        "JobId" : job.id,
        "JobSeekerId":this.jobseekerAuth.id,
        "EmployerId": job.employerId,
        "CompanyName": "",
        "JobTitle": job.jobTitle,
        "JobType": job.jobType,
        "Filepath": "",
        "JobLocation": job.jobLocation,
        "ApplicationDeadline": job.deadline
      }

      if(Object.keys(body).length == 0){
        alert("Enter the data.")

      }

      else{
        return this.http.post<boolean>(this.apiUrl+"jobApplication/add", body);
      }

      
    
    }
  
}
