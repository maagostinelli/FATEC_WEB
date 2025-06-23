import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})

export class CestaComponent {
  lista: ItemCesta[] = [];
  mensagem: string = "";
  totalCompra: number = 0;
  /*
  itens_cesta: ItemCesta[] = [
    {id: 11, nome: "Café Brasileiro - 180g", preco: 40.50, quantidade: 2, imagem: "cafe_brazil.jpg"},
    {id: 41, nome: "Copo colecionável - SP.com", preco: 40.50, quantidade: 1, imagem: "copo_colecao_01.jpg"},
  ];
 */
  constructor() {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    let json = localStorage.getItem("cesta");
    if (json == null) {
      this.mensagem = "Cesta de compras vazia!";
    } else {
      this.lista = JSON.parse(json);
      for (let item of this.lista) {
        this.totalCompra = this.totalCompra + item.total;
      }
    }
  } else {
    this.mensagem = "Cesta de compras vazia!";
  }
}

  finalizar() {
    let num_compra: number = 0;
    if (this.lista.length > 0) {
      alert("Compra finalizada com sucesso! \nNúmero da compra: " + num_compra + " \nTotal: R$ " + this.totalCompra.toFixed(2));
      num_compra++;
    } else {
      alert("Não existem itens na cesta!");
    }
  }

  limpar(codigo: number) {
    this.lista = [];
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const json = localStorage.getItem("cesta");
      if (json) {
        let lista: ItemCesta[] = JSON.parse(json);
        // Remove apenas o item com o código correspondente
        lista = lista.filter(item => item.codigo !== codigo);
        localStorage.setItem("cesta", JSON.stringify(lista));
        this.lista = lista;
        this.atualizarTotal();
      }
    }
  }
  atualizarTotal(): void {
    this.totalCompra = this.lista.reduce(
      (soma, item) => soma + (item.valor * item.quantidade),
      0
    );
  }
}