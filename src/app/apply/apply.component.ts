import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../models/jobpost';
import { ApplyService } from '../service/apply.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  fileToUpload: File | null = null;
  job : Job| any;

  constructor(public applyService: ApplyService, private router:Router) { 
    this.job=localStorage.getItem("jobforupdate");
    this.job = JSON.parse(this.job);
    console.log(this.job);
  }
  
 
  ngOnInit(): void {
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.applyService.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}



apply(){

  this.applyService.apply(this.job).subscribe(
    response  => 
    {
      if(response!=null)
      {
          if(response!=false)
          {
           alert("Job applied successfully");
           
              this.router.navigate(["/jobseeker"])
          }

          else
          {
            alert("Job is not applied....Try again");
          }
      }

    }
  )

}


}
