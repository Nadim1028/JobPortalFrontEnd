import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {JobSeekerAuth} from "src/app/models/jobseekerauth";
import {EmployerAuth} from "src/app/models/employerauth";
import {BarService} from "src/app/service/bar.service";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  messageReceived: any;
  private subscriptionName: Subscription | any; 

  loggedIn = false ;
  notLoggedIn = true ;
  userName: string | any ;
  employerAuth: EmployerAuth | any ;
  jobseekerauth : JobSeekerAuth | any;
  
  constructor(public router: Router, public service: BarService) { 
    this.subscriptionName= this.service.getUpdate().subscribe
             (message => {
                this.messageReceived = message;
                console.log("ssssssssssssss===");
                this.ngOnInit() ;
             });
  }

  ngOnInit(): void {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn=='admin'){
      this.loggedIn = true ;
      this.notLoggedIn = false;
      this.userName = "admin" ;
    }
    else if(isLoggedIn=='employer'){
      if(localStorage.getItem('user')!=null){
        this.loggedIn = true ;
        this.notLoggedIn = false ;
        
        this.employerAuth = localStorage.getItem('user') ;
        this.employerAuth = JSON.parse(this.employerAuth);
        this.userName = this.employerAuth.userName ;

        console.log("User Name = "+this.userName);

      }
    }

    else if(isLoggedIn=='jobseeker'){
      if(localStorage.getItem('user')!=null){
        this.loggedIn = true ;
        this.notLoggedIn = false ;

        this.jobseekerauth = localStorage.getItem('user') ;
        this.jobseekerauth = JSON.parse(this.jobseekerauth);
        this.userName = this.jobseekerauth.userName ;

        console.log("User Name = "+this.userName);
        
      }
    }

  }

  sign_out(){
    localStorage.removeItem('isLoggedIn') ;
    localStorage.removeItem('user') ;
    this.loggedIn = false ;
    this.notLoggedIn = true ;
    this.router.navigate(['home']) ;
    
  }

  ngOnDestroy() { 
    this.subscriptionName.unsubscribe();
  }
}
