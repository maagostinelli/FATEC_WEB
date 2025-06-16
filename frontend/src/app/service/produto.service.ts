import { Injectable } from '@angular/core';
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
  public fazerBusca(termo: String): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/produtos/busca/'+termo);
  }
}
