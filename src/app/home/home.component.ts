import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {Job} from "src/app/models/jobpost"
import { JobService } from '../service/job.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myjobs: Job[] = [];
  searchKey: string; 
  searchedJobs : Job[] = [];
   num : Int32Array;


  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "Govt"},
      {id: 1, name: "Private"},
      {id: 2, name: "NGO"}
  ];

  

  selected(){
    console.log(this.selectedLevel)
    console.log("number = "+this.num)
  }
  
  
  constructor(public jobService:JobService,private router : Router) { }

  ngOnInit(): void 
  {
    this.loadJobs();
    var isLoggedIn = localStorage.getItem("isLoggedIn");


    if(isLoggedIn=="admin"){
      this.router.navigate(["home"]);
    }

    else if(isLoggedIn=="employer"){
      this.router.navigate(["home"]);

    }

    else if(isLoggedIn=="jobseeker"){
      this.router.navigate(["home"]);
    }


  }

  

  loadJobs( ):void{
    this.jobService.getJobs().subscribe(response=> {this.myjobs = response}
  
      )
      ;
      console.log(this.myjobs);
  }

 

  search(){
   // this.jobService.getJobsBysearchKey(this.searchKey).subscribe((searchedJobs)=> this.searchedJobs = searchedJobs);

  // localStorage.setItem("jobs", JSON.stringify(this.searchedJobs));
  
  //  localStorage.setItem("searchKey",this.searchKey);
  //  this.num = this.selectedLevel;

  //  if(this.selectedLevel==0)
  //   localStorage.setItem("number","govt");

  //   this.router.navigate(["search"]);
  
  }


}

export function parse(selectedLevel: any): Int32Array {
  throw new Error('Function not implemented.');
}

