import { Component, Input, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { ProductCartService } from '../services/firestore/product-carts.service';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  @Input()datacarrito:any;
  @Input()newcarCC:any;
  @Input()emailusuario:any;
  constructor(private Pservice:ProductCartService) {
   }

  size: NzButtonSize = 'large';
  ngOnInit(): void {
  }

  cambiarStatusCarrito(){
    var data={status:"completed"}
    this.Pservice.update_carts(this.newcarCC.id,data)
  }
}
