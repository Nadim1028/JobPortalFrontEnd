import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobSeekerAuth } from 'src/app/models/jobseekerauth';
import { JobseekerLoginService } from 'src/app/service/jobseeker-login.service';

@Component({
  selector: 'app-jobseeker-update',
  templateUrl: './jobseeker-update.component.html',
  styleUrls: ['./jobseeker-update.component.css']
})
export class JobseekerUpdateComponent implements OnInit {

  jobseekerauth : JobSeekerAuth | any;

  constructor(public jobseekerUpdateService: JobseekerLoginService, private router : Router) { 
    this.jobseekerauth = localStorage.getItem('user') ;
      this.jobseekerauth = JSON.parse(this.jobseekerauth);
      console.log(this.jobseekerauth);
  }

  ngOnInit(): void {
  }

  updateJobSeeker()
  {
    this.jobseekerUpdateService.updateJobSeeker().subscribe(
      response  => 
      {
        console.log("response = "+response);
        if(response!=null)
        {
          console.log("response = "+response);

            if(response!==false)
            {
              localStorage.setItem("user", JSON.stringify(response));
                this.router.navigate(["jobseeker/jobseekerupdate"])
            }

            else
            {
              alert("Job Seeker is not updated....Try again");
            }
        }

      }
    )
  }

}
