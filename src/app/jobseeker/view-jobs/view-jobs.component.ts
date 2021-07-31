import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../models/jobpost';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  job : Job | any;
  jobs: Job[] = [];


  constructor(public jobservice : JobService, private router : Router) {
    
   }

  ngOnInit(): void {
    this.loadJobs();
  }

  apply(job : Job){
    localStorage.setItem("jobforupdate", JSON.stringify(job));
    this.router.navigate(["/apply"]);
  }

  viewjob(job : Job){
    
  }

  loadJobs( ):void{
    this.jobservice.getJobs().subscribe(response=> {this.jobs = response}
  
      )
      ;
      console.log(this.jobs);
  }

}
