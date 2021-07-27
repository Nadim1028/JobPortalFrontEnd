import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { ActivatedRoute, Router } from  "@angular/router";


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor(public jobService:JobService, private router : Router) { }

  ngOnInit(): void {
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
             
                this.router.navigate(["home"])
            }

            else
            {
              alert("Job is not created....Try again");
            }
        }

      }
    )
  }

}
