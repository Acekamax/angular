import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  @Input()emailusuario:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.emailusuario)
  }

}
