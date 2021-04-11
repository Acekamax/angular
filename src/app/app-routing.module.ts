import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './providers/auth/guards.service';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
    
  },{
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegistroComponent

  },
  {
    path:"carrito",
    component:CarritoComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"layout",
    component:LayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"bienvenido",
    component:BienvenidoComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"cotizacion",
    component:CotizacionComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
