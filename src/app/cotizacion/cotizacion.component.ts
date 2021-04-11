import { Component, Input, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ProductCartService } from '../services/firestore/product-carts.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  @Input()datacarrito:any;
  @Input()newcarCC:any;
  @Input()emailusuario:any;
  constructor(private Pservice:ProductCartService, private router:Router) {
   }

  size: NzButtonSize = 'large';
  ngOnInit(): void {
  }

  cambiarStatusCarrito(){
    var data={status:"completed"}
    this.Pservice.update_carts(this.newcarCC.id,data)
    this.router.navigateByUrl("login");
  }
}
