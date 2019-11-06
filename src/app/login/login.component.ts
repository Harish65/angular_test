import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginuser: Login = {
    email : '',
    password : null
  }

  constructor() { }

  ngOnInit() {
  }

}
