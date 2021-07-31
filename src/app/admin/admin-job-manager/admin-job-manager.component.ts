import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/jobpost';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-admin-job-manager',
  templateUrl: './admin-job-manager.component.html',
  styleUrls: ['./admin-job-manager.component.css']
})
export class AdminJobManagerComponent implements OnInit {

  jobid : number;
  jobs: Job[] = [];

  constructor(public jobservice : JobService, private router : Router) { }

  ngOnInit(): void {
    this.loadJobs();
  }


  deleteJob(jobid : number) : void{
    this.jobservice.deleteJobService(jobid).subscribe(
      response => {
        console.log(response);
        alert("Delete successfully!");
        this.loadJobs();
      }
    );
  }


  
  loadJobs( ):void{
    this.jobservice.getJobs().subscribe(response=> {this.jobs = response}
      )
      ;
      console.log(this.jobs);
  }

}
