import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';
import { ProdutoService } from '../service/produto.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  mensagem: string ="";
  lista: Produto[] = [];

  constructor(private service: ProdutoService) {
    
    // Inicialização do componente
    this.service.carregarVitrine().subscribe({
      next: (data) => { 
        // Caso dê certo, atribui os dados à lista
        this.mensagem = "";
        this.lista = data;
      },
      error: (err) => {
        // Caso ocorra um erro, exibe uma mensagem
        this.mensagem = "Ocorreu um erro. Tente mais tarde!";
      }
    });
  }

  public comprar(obj: Produto) {
    let novo: ItemCesta = new ItemCesta();
    novo.codigo = obj.codigo;
    novo.nome = obj.nome; 
    novo.valor = obj.valor;
    novo.quantidade = 1;
    let lista: ItemCesta[] = [];
    let json = localStorage.getItem("cesta");
    if(json==null){
      lista.push(novo);
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }
    localStorage.setItem("cesta", JSON.stringify(lista));
    window.location.href = "./cesta";
  }

  public abrirDetalhe(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj.codigo));
    window.location.href = "./detalhe";
  }

  public carregar(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe";
  }
}
