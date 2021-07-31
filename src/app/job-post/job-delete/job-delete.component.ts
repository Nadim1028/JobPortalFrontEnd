import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/jobpost';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-delete',
  templateUrl: './job-delete.component.html',
  styleUrls: ['./job-delete.component.css']
})
export class JobDeleteComponent implements OnInit {

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

  updatejob(job : Job) : void{
    localStorage.setItem("jobforupdate", JSON.stringify(job));
    this.router.navigate(["/employer/jobmanager/jobupdate"]);
  }

  loadJobs( ):void{
    this.jobservice.getJobsByEmployerId().subscribe(response=> {this.jobs = response}
      )
      ;
      console.log(this.jobs);
  }

}
