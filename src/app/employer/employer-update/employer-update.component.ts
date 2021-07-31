import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerAuth } from 'src/app/models/employerauth';
import { LoginService } from 'src/app/service/employer-login.service';

@Component({
  selector: 'app-employer-update',
  templateUrl: './employer-update.component.html',
  styleUrls: ['./employer-update.component.css']
})
export class EmployerUpdateComponent implements OnInit {

  employer : EmployerAuth | any;

  constructor(public employerUpdateService :LoginService, private router : Router) { 
    this.employer = localStorage.getItem('user') ;
      this.employer = JSON.parse(this.employer);
  }

  ngOnInit(): void {
  }

  updateEmployer()
  {
    this.employerUpdateService.updateEmployer().subscribe(
      response  => 
      {
        console.log("response = "+response);
        if(response!=null)
        {
          console.log("response = "+response);

            if(response!==false)
            {
             
               //alert("Updated")
               // this.employer = localStorage.setItem.('user') ;
                localStorage.setItem("user", JSON.stringify(response));
                console.log(response)
               
                this.router.navigate(["employer/employerupdate"])
            }

            else
            {
              alert("Employer is not updated....Try again");
            }
        }

      }
    )
  }



}
