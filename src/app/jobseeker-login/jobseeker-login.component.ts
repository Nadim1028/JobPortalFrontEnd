import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarService } from '../service/bar.service';
import { SignupService } from '../service/employer-signup.service';
import {JobseekerLoginService} from '../service/jobseeker-login.service'

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent implements OnInit {

  constructor(public loginService:JobseekerLoginService, private router : Router,public service: BarService) { }

  ngOnInit(): void {
  }

  loginTest(){
    this.loginService.loginUser().subscribe(
      response  => 
      {
        if(response!=null)
        {
            if(response!=false)
            {
             // alert("Login successful");
              console.log("This is response = "+response);

             
              if(this.loginService.formModel.value.username=="admin" && this.loginService.formModel.value.password=="nadim123" )
             {
               localStorage.setItem("isLoggedIn","admin");

              this.router.navigate(["admin"])

             }
              else{
                localStorage.setItem("isLoggedIn","jobseeker");
                localStorage.setItem("user", JSON.stringify(response));
                this.service.sendUpdate("update");

                this.router.navigate(["jobseeker"])

              }
            }

            else
            {
              alert("Incorrect password or username...Try again");
            }
        }

        
      }
    )
  }

  signup(){
    //alert("Sign up page");
    this.router.navigate(["employersignup"])
  }
}
