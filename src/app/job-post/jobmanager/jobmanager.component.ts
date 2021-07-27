import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobmanager',
  templateUrl: './jobmanager.component.html',
  styleUrls: ['./jobmanager.component.css']
})
export class JobmanagerComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  createJob(){

    this.router.navigate(["job"])

  }

  updateJob(){
    this.router.navigate(["jobupdate"])
  }

  deleteJob(){
    this.router.navigate(["jobdelete"])
  }

}
