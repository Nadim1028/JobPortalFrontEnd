import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { ActivatedRoute, Router } from  "@angular/router";

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {

  constructor(public jobupdateService:JobService, private router : Router) { }

  ngOnInit(): void {
  }

  updateJob(){
    this.jobupdateService.updateJobService().subscribe(
      response  => 
      {
        alert("Response");
        if(response!=null)
        {
            if(response==true)
            {
             alert("Job updated successfully");
             
                this.router.navigate(["home"])
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
