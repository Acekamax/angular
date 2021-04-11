import { Component, OnInit } from '@angular/core';
import {AuthService} from  '../providers/auth/auth-firebase.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data={
  email:"",
  password:""
  } 
  constructor( private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.estadoSesion()
  }

  async login(){
    console.log(this.data.email)
    console.log(this.data.password)
    await this.auth.emailLogin(this.data.email,this.data.password)

    this.estadoSesion()
  }
  async estadoSesion(){
    const data = await this.auth.consultarStatusSesion();
    console.log(data)
    if(data != null)
    {
      this.router.navigateByUrl("layout");
    }
  }

}
