import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/employer-signup.service';

@Component({
  selector: 'app-jobseeker-info',
  templateUrl: './jobseeker-info.component.html',
  styleUrls: ['./jobseeker-info.component.css']
})
export class JobseekerInfoComponent implements OnInit {

  constructor(public signupService:SignupService) { }

  ngOnInit(): void {
  }

  signUpUser(){
    
  }

}
