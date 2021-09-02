import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Job } from '../models/jobpost';
import { JobService } from '../service/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myjobs: Job[] = [];
  jobList:Job[] = [];
  searchKey : string | any;
  num : string;


constructor(public jobService:JobService,private router : Router) {
 
    this.searchKey = localStorage.getItem('searchKey') ;
    this.num = localStorage.getItem('number') ;
      console.log("Search Key ="+this.searchKey);
      console.log("Option Key ="+this.num);
}

ngOnInit():void {
  this.loadJobs();
  this.loadJobList();
}

loadJobs():void{
  this.jobService.getJobsBysearchKey(this.searchKey).subscribe(response=> {this.myjobs = response});
 
}

loadJobList( ):void{
  this.jobService.getJobs().subscribe(response=> {this.jobList = response}

    )
    ;
    console.log(this.jobList);
}

}


