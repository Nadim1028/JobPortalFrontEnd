import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-jobseeker-signup',
  templateUrl: './jobseeker-signup.component.html',
  styleUrls: ['./jobseeker-signup.component.css']
})
export class JobseekerSignupComponent implements OnInit {

  constructor(public signupService:SignupService) { }

  ngOnInit(): void {
  }

  signUpUser(){
    
  }

}
