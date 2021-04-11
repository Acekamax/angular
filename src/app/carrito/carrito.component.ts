import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ProductsService} from '../services/firestore/products.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Output()
  postMessageEvent = new EventEmitter();
  isCollapsed = false;
  items= ['Really Smart', 'Super Flexible', 'Weather Changer',"a","b","c","d"];
  prueba:any =[];

  element:any=[];
  productosseleccionados:any=[
       
  ]

  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.postMessageEvent.emit(this.productosseleccionados)
  }
  
  getProducts(){
    this.ps.get_products_list().subscribe(
      res => {
        res.forEach((doc)=>{
          this.prueba.push(doc.data());          
        }
        )
        console.log(this.prueba)
      },
      err => console.log(err)
    );
  }

  agregarProducto(sku:string,nombre:string,cantidad:number){
    var find=this.productosseleccionados.find((element:any) => element.sku===sku);
    console.log(find)
    if(find!==undefined){
      this.productosseleccionados.splice(this.productosseleccionados.findIndex((element:any) => element.sku===sku),1);
      var cant=find.cantidad;
      cant++
      console.log(find)
      this.productosseleccionados.push({sku,nombre,cantidad:cant})
    }else{
      this.productosseleccionados.push({sku,nombre,cantidad})
    }
    console.log(this.productosseleccionados)
  }
  restarProducto(sku:string,nombre:string,cantidad:number){
    var find=this.productosseleccionados.find((element:any) => element.sku===sku);
    console.log(find)
    if(find!==undefined){
      this.productosseleccionados.splice(this.productosseleccionados.findIndex((element:any) => element.sku===sku),1);
      var cant=find.cantidad;
      if (cant>1){ 
      cant--
      }
      console.log(find)
      this.productosseleccionados.push({sku,nombre,cantidad:cant})
    }else{
      this.productosseleccionados.push({sku,nombre,cantidad})
    }
    console.log(this.productosseleccionados)
  }
  eliminarProducto(sku:string,nombre:string,cantidad:number){
    var find=this.productosseleccionados.find((element:any) => element.sku===sku);
    console.log(find)
    if(find!==undefined){
      this.productosseleccionados.splice(this.productosseleccionados.findIndex((element:any) => element.sku===sku),1);
    }
    console.log(this.productosseleccionados)
  }
  validarProducto(sku:string){
    var find=this.productosseleccionados.find((element:any) => element.sku===sku);
    if(find!==undefined){
      return true;
    }else{
      return false;
    }
  }

}
