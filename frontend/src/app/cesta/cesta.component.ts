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

  limpar() {
  this.lista = [];
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.removeItem("cesta");
  }
}
}