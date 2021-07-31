import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerAuth } from '../models/employerauth';
import { JobSeekerAuth } from '../models/jobseekerauth';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {

  constructor(private router : Router) { }
  
  

  ngOnInit(): void {
    



  }


  signUpUser(){
    
  }

}
