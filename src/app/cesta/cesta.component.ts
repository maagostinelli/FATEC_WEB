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
  itens_cesta: ItemCesta[] = [
    {id: 11, nome: "Café Brasileiro - 180g", preco: 40.50, quantidade: 2, imagem: "cafe_brazil.jpg"},
    {id: 41, nome: "Copo colecionável - SP.com", preco: 40.50, quantidade: 1, imagem: "copo_colecao_01.jpg"},
  ];

  public carregar(obj: ItemCesta) {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./cesta";
  }
}