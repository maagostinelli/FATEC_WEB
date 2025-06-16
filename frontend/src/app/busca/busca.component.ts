import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  public mensagem: string = '';
  public resultados: Produto[] = [];
  public termo: string = '';

  constructor(private produtoService: ProdutoService) {
    let json = localStorage.getItem("termo");
    if(json != null) {
      this.termo = json;
      this.produtoService.fazerBusca(this.termo).subscribe({
        next:(data)=>{
          this.mensagem = "";
          this.resultados = data;
        },
        error:(err)=>{
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
        }
      });
    } else {
      this.mensagem = "Nenhum termo de busca foi informado!";
    }
  }

    public comprar(produto: Produto){
    let novo: ItemCesta = new ItemCesta();
    novo.codigo = produto.codigo;
    novo.nome = produto.nome;
    novo.valor = produto.valor;
    novo.quantidade = 1;
    novo.total = produto.valor;
    let lista : ItemCesta[] = [];
    let json = localStorage.getItem("cesta");
    if(json==null){
      lista.push(novo);  
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }  
    localStorage.setItem("cesta",JSON.stringify(lista));
    window.location.href="./cesta";
  }

  public carregar(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe";
  }
}

