import { Component, OnInit, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AuthService } from '../providers/auth/auth-firebase.service';
import { ProductCartService } from '../services/firestore/product-carts.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  newcar:any
  userEmail:any="";
  userName:any="";
  constructor(
    private auth:AuthService,
    private pcservice:ProductCartService,  
  ) { }

  modulo="inicio";

  items:any= [];  

  size: NzButtonSize = 'large';
  
  ngOnInit(): void {
    this.getUserData();
  }
  CambiarContenido(contenido:string) {
    this.modulo=contenido
  }
  traerproductosSeleccionados(data:any){
    this.items=data
  }

  async guardarCarro(){
    this.newcar=await this.pcservice.create_cart()
    this.items.forEach(async(element: any) => {
      console.log("llego")
      var product=await this.pcservice.get_product_bysku(element.sku)
      var data={product_id:product,cart_id:this.newcar.id,quantity:element.cantidad}
      await this.pcservice.create_product_carts(data)
    });
    this.modulo="cotizacion"
  }

  async getUserData(){
    var data:any = await this.auth.consultarStatusSesion();
    this.userEmail = data.email;
    this.userName = data.displayName;
  }

  async signOut(){
    this.auth.SignOut();
  }  
}
