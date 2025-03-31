import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';


@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  detalhe_produto: Produto[] = [
    {codigo:11, nome:"Café Brasileiro - 180g", descritivo:"Café torrado moído", valor:40.50, valorPromo:38.00,quantidade:5, imagem:"cafe_brazil.jpg"},
  ];

  public carregar(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./cesta";
  }
}