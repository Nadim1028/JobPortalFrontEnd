import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent implements OnInit {

  constructor(public signupService:SignupService) { }

  ngOnInit(): void {
  }

  signUpUser(){

  }

}
