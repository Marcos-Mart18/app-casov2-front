import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl="http://localhost:8080/api/v1/productos"
  constructor(private http: HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getProductoById(idProducto:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.apiUrl}/${idProducto}`);
  }
  crearProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.apiUrl,producto);
  }
  editarProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.apiUrl,producto);
  }
  deleteProducto(idProducto: number){
    return this.http.delete(`${this.apiUrl}/${idProducto}`);
  }
}
