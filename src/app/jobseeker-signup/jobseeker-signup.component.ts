import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobSeekerSignupService } from '../service/job-seeker-signup.service';

@Component({
  selector: 'app-jobseeker-signup',
  templateUrl: './jobseeker-signup.component.html',
  styleUrls: ['./jobseeker-signup.component.css']
})
export class JobseekerSignupComponent implements OnInit {

  constructor(public signupService:JobSeekerSignupService, private router:Router) { }

  ngOnInit(): void {
  }

  signUpUser(){
    this.signupService.signupUserInService().subscribe(
      response  => 
      {
       // alert("Response");
        if(response!=null)
        {
            if(response==true)
            {
             alert("Sign up successful");
             
                this.router.navigate(["jobseekerlogin"])
            }

            else
            {
              alert("Try again...");
            }
        }

        else
          {
            alert("Try again...");
          }

       }
    )
  }

}
