import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobSeekerAuth } from 'src/app/models/jobseekerauth';
import { JobseekerLoginService } from 'src/app/service/jobseeker-login.service';

@Component({
  selector: 'app-admin-jobseeker-manager',
  templateUrl: './admin-jobseeker-manager.component.html',
  styleUrls: ['./admin-jobseeker-manager.component.css']
})
export class AdminJobseekerManagerComponent implements OnInit {

  jobseekerid : number;
  jobseekers: JobSeekerAuth[] = [];

  constructor(public jobseekerService : JobseekerLoginService, private router : Router) { }

  ngOnInit(): void {
    this.loadJobSeekers();
  }

  

  deleteSeeker(jobseekerId : number){
    this.jobseekerService.deleteJobSeeker(jobseekerId).subscribe(
      response => {
        console.log(response);
        alert("Delete successfully!");
        this.loadJobSeekers();
      }
    );
  }

  loadJobSeekers( ):void{
    this.jobseekerService.getJobSeekerAuths().subscribe(response=> {this.jobseekers = response});
      console.log(this.jobseekers);
  }

}
