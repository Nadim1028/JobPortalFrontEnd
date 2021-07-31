import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { ActivatedRoute, Router } from  "@angular/router";
import { Job } from 'src/app/models/jobpost';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {

  job : Job | any;

  constructor(public jobupdateService:JobService, private router : Router) { }

  ngOnInit(): void {
    this.job=localStorage.getItem("jobforupdate");
    this.job = JSON.parse(this.job);
    console.log(this.job)
  }

  updateJob(){
    this.jobupdateService.updateJobService(this.job).subscribe(
      response  => 
      {
        if(response!=null)
        {
            if(response!=false)
            {
             alert("Job updated successfully");
             
                this.router.navigate(["/employer/jobmanager/"])
            }

            else
            {
              alert("Job is not updated....Try again");
            }
        }

      }
    )
  }


}
