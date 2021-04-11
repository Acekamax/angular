import { Component, OnInit } from '@angular/core';
import { AuthService } from './../providers/auth/auth-firebase.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  data={
    email:"",
    password:"",
    passwordconf:""
    } 
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async emailLogin (){

    if(this.data.password===this.data.passwordconf){
      var login=await this.auth.crear(this.data.email,this.data.password) 
      this.estadoSesion()
    }else{
      alert("las contraseñas no son iguales")
    }    
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
