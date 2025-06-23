import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente'; // Importa o modelo Cliente
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //Aguarda a resposta da consulta

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  public gravar(obj: Cliente): Observable<any> {
    return this.http.post('http://localhost:8080/api/cliente', obj);
  }
  public alterar(obj: Cliente): Observable<any> {
    return this.http.put('http://localhost:8080/cliente', obj);
  }
  public apagar(obj: Cliente): Observable<any> {
    return this.http.delete('http://localhost:8080/cliente/' + obj.codigo);
  }
  public carregar(obj: Cliente): Observable<any> {
    return this.http.get('http://localhost:8080/clientes/' + obj.codigo);
  }
}


/**
 * import { Injectable } from '@angular/core';
 import { Produto } from '../model/produto';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs'; //Aguarda a resposta da consulta
 
 @Injectable({
   providedIn: 'root'
 })
 export class ProdutoService {
 
   constructor(private http:HttpClient) {}
 
 
   public gravar(obj: Produto): Observable<any> {
     return this.http.post('http://localhost:8080/produtos', obj);
   }
   public alterar(obj: Produto): Observable<any> {
     return this.http.put('http://localhost:8080/produto', obj);
   }
   public apagar(obj: Produto): Observable<any> {
     return this.http.delete('http://localhost:8080/produto/'+ obj.codigo);
   }
   public carregar(obj: Produto): Observable<any> {
     return this.http.get('http://localhost:8080/produtos/'+ obj.codigo);
   }
   public carregarVitrine(): Observable<any> {
     return this.http.get('http://localhost:8080/produtos/vitrine');
   }
   public fazerBusca(termo:String): Observable<any> {
     return this.http.get('http://localhost:8080/produtos/busca/'+termo);
   }
 }
 
 */