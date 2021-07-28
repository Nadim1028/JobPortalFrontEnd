import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-delete',
  templateUrl: './job-delete.component.html',
  styleUrls: ['./job-delete.component.css']
})
export class JobDeleteComponent implements OnInit {

  jobid : number;


  constructor(public jobservice : JobService) { }

  ngOnInit(): void {
  }


  deleteJob(jobid : number) : void{
   // alert("deleteJob")
    this.jobservice.deleteJobService(jobid).subscribe(
      response => {
        alert("deleteJob")
        console.log(response);
        alert("Delete successfully!");
        window.location.reload();
      }
    );
  }

}
