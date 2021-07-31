import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from  "@angular/router";
import { SignupService } from '../service/employer-signup.service';  


@Component({
  selector: 'app-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})

export class SignupComponent implements OnInit 
{

  constructor(public signupService : SignupService, private router:Router) { }

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
             //alert("Sign up successful");
             
                this.router.navigate(["employerlogin"])
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
