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
    {codigo:11, nome:"Café Raízes do Brasil – 180g", descritivo:"Cultivado em terras brasileiras ricas e tropicais, o Café Raízes do Brasil traz uma torra média equilibrada, corpo marcante e notas sutis de chocolate amargo. Ideal para quem valoriza tradição e sabor na medida certa.", valor:40.50, valorPromo:38.00,quantidade:5, imagem:"cafe_brazil.jpg"},
  ];

  public carregar(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./cesta";
  }
}