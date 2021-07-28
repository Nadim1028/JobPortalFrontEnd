import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private router : Router) { }

  ngOnInit(): void {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn=="admin"){
      this.router.navigate(["admin"]);
    }

    else if(isLoggedIn=="employer"){
      this.router.navigate(["employer"]);

    }
  }

}
