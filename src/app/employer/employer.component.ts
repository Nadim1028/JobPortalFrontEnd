import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/employer-login.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(public employerUpdateService : LoginService) { }

  ngOnInit(): void {
  }

  updateEmployer(){

  }

}
