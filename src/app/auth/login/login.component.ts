import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from  '@angular/material';
import {ErrorComponent} from "../../error/error.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public  username:  string  =  "";
  public  password:  string  =  "";


  constructor(private  dialog:  MatDialog, private  router:  Router) { }

  login(){
    if(this.username  ===  "demo"  &&  this.password  === "demo")
    {
      this.router.navigate(['/']);
    }
    else
    {
      this.dialog.open(ErrorComponent,{ data: {
          message:  "Your login information are incorrect!"
        }});
    }
  }

  ngOnInit() {
  }

}
