import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/employer-login.service';
import { ActivatedRoute, Router } from  "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"
import { BarService } from '../service/bar.service';




@Component({
  selector: 'app-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})


export class LoginComponent implements OnInit {


  constructor(public loginService:LoginService, private router : Router,public dialog: MatDialog,public service: BarService) { }

  



  ngOnInit(): void {
  }

  loginTest(){
    this.loginService.loginUser().subscribe(
      response  => 
      {
        if(response!=null)
        {
            if(response!=false)
            {
             // alert("Login successful");
              console.log("This is response = "+response);

             
              if(this.loginService.formModel.value.username=="admin" && this.loginService.formModel.value.password=="nadim123" )
             {
              localStorage.setItem("isLoggedIn","admin");
              this.service.sendUpdate("update");
              this.router.navigate(["admin"])

             }
              else{
                localStorage.setItem("isLoggedIn","employer");
                localStorage.setItem("user", JSON.stringify(response));
                console.log(response)
                this.service.sendUpdate("update");
                this.router.navigate(["employer"])

              }
            }

            else
            {
              alert("Incorrect password or username...Try again");
            }
        }

        
      }
    )
  }

  signup(){
    //alert("Sign up page");
    this.router.navigate(["employersignup"])
  }

  navigateToEmployer(){
    this.router.navigate(["employer"])
  }

}
