import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apply } from 'src/app/models/apply';
import { EmployerAuth } from 'src/app/models/employerauth';
import { ApplyService } from 'src/app/service/apply.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {

  myapplications: Apply[] = [];
  filteredApplications: Apply[] = [];
  employerId : string | any;
  employerAuth : EmployerAuth | any;
  constructor(public applyService:ApplyService,private router : Router) { 
    this.employerAuth = localStorage.getItem('user') ;
    this.employerAuth = JSON.parse(this.employerAuth);
    this.employerId = this.employerAuth.id;

    console.log("Employer Id = "+this.employerId);
  }

  ngOnInit(): void {
    this.loadApplications();
    this.loadApplicationsByEmployerId();
  }


  loadApplications( ):void{
    this.applyService.getApplicants().subscribe(response=> {this.myapplications = response}
  
      )
      ;
      console.log(this.myapplications);
  }

  loadApplicationsByEmployerId():void{
    this.applyService.getApplicationsByEmployerId().subscribe(response=> {this.filteredApplications = response});
   
  }

}
