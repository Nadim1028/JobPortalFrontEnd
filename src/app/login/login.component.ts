import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ActivatedRoute, Router } from  "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog"




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  constructor(public loginService:LoginService, private router : Router,public dialog: MatDialog) { }

  



  ngOnInit(): void {
  }

  loginTest(){
    this.loginService.loginUser().subscribe(
      response  => 
      {
        if(response!=null)
        {
            if(response==true)
            {
             // alert("Login successful");
              console.log("This is response = "+response);

              if(this.loginService.formModel.value.username=="admin" && this.loginService.formModel.value.password=="nadim123" )
              this.router.navigate(["admin"])
              else
                this.router.navigate(["job"])
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
    this.router.navigate(["signup"])
  }

}
