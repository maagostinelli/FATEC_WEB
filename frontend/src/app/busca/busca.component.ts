import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';
import { ProdutoService } from '../service/produto.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent implements OnInit{
  public mensagem: string = '';
  public resultados: Produto[] = [];
  public termoBusca: string = '';

  constructor(
    private produtoService: ProdutoService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {
    if (typeof window !== 'undefined'){
      let json = localStorage.getItem("termoBusca");
      if(json != null) {
        this.termoBusca = json;
        console.log("Termo recebido: " + this.termoBusca);
        this.produtoService.fazerBusca(this.termoBusca).subscribe({
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
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      const termo = params.get('termo');
      if (termo) {
        this.termoBusca = termo;
        this.executarBusca(termo);
      } else {
        this.mensagem = 'Nenhum termo de busca foi informado!';
      }
  });
  }

    executarBusca(termo: string): void {
      this.produtoService.fazerBusca(termo).subscribe({
    next: (data) => {
      this.resultados = data;
      this.mensagem = '';
    },
    error: () => {
      this.mensagem = 'Erro ao buscar produtos!';
    }
  });
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

  public abrirDetalhe(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj.codigo));
    this.router.navigate(["/detalhe", obj.codigo]);
  }

  public carregar(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe";
  }
}

