import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl="http://localhost:8080/api/v1/clientes"
  constructor(private http: HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }
  getClienteById(idCliente:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}/${idCliente}`);
  }
  crearCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl,cliente);
  }
  editarCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl,cliente);
  }
  deleteCliente(idCliente: number){
    return this.http.delete(`${this.apiUrl}/${idCliente}`);
  }
}
