import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerAuth } from 'src/app/models/employerauth';
import { LoginService } from 'src/app/service/employer-login.service';

@Component({
  selector: 'app-admin-employer-manager',
  templateUrl: './admin-employer-manager.component.html',
  styleUrls: ['./admin-employer-manager.component.css']
})
export class AdminEmployerManagerComponent implements OnInit {

  employerid : number;
  employers: EmployerAuth[] = [];

  constructor(public employerService : LoginService, private router : Router) { }

  ngOnInit(): void {
    this.loadEmployers();
  }

  

  deleteEmployer(employerId : number){
    this.employerService.deleteEmployer(employerId).subscribe(
      response => {
        console.log(response);
        //alert("Delete successfully!");
        this.loadEmployers();
      }
    );
  }

  loadEmployers( ):void{
    this.employerService.getEmployersAuths().subscribe(response=> {this.employers = response});
      console.log(this.employers);
  }

}
