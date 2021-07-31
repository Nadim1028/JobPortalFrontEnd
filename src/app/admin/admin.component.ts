import { Component, OnInit } from '@angular/core';
import { ViewChild,ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { BarService } from '../service/bar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('nameInput1') nameInput1: ElementRef;

  constructor(private router:Router, public service : BarService) { }

  ngOnInit(): void {
  }


  loginTest(){
    console.log('user name: ', this.nameInput.nativeElement.value);
    console.log('password: ', this.nameInput1.nativeElement.value);

    if(this.nameInput.nativeElement.value === "admin" && this.nameInput1.nativeElement.value==="nadim123"){
      localStorage.setItem("isLoggedIn","admin");
      this.service.sendUpdate("update");

      this.router.navigate(["admin-manager"]);
    }

    else{
      alert("incorrect password or username");
    }

    //this.router.navigate(["admin-manager"]);
  }

}
