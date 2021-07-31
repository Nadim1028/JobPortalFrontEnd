import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { ActivatedRoute, Router } from  "@angular/router";
import {Job} from "src/app/models/jobpost"

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs: Job[] = [];
  searchKey: string; 
  searchedJobs : Job[] = [];

  constructor(public jobService:JobService, private router : Router) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((jobs)=> this.jobs = jobs);
  }

  createJob(){
    this.jobService.createJobService().subscribe(
      response  => 
      {
       // alert("Response");
        if(response!=null)
        {
            if(response==true)
            {
             alert("Job created successfully");
             
                this.router.navigate(["employer/jobmanager/jobdelete"])
            }

            else
            {
              alert("Job is not created....Try again");
            }
        }

      }
    )
  }


  search(){
    
    this.jobService.getJobsBysearchKey(this.searchKey).subscribe((searchedJobs)=> this.searchedJobs = searchedJobs);
    console.log(this.searchedJobs);
     
  }

}
