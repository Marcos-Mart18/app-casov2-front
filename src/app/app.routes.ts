import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ClienteComponent } from './component/cliente/cliente.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Página Inicio'
    },
    {
        path:'producto-caso',
        component:ProductoComponent,
        title:'Producto'
    },{
        path:'cliente-caso',
        component:ClienteComponent,
        title:'Cliente'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
