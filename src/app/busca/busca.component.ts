import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  mensagem: String = "";
  produtos: Produto[] = [
    {codigo:11, nome:"Café Brasileiro - 180g", descritivo:"Café torrado moído", valor:40.50, valorPromo:38.00,quantidade:5, imagem:"cafe_brazil.jpg"},
    {codigo:21, nome:"Café Especial Etiópia - 180g", descritivo:"Café etíope torrado moído", valor:56.60, valorPromo:48.00,quantidade:6, imagem:"cafe_ethiopia.jpg"},
    {codigo:31, nome:"Café de Nuts Especial - 180g", descritivo:"Café torrado notas de avelã", valor:60.00, valorPromo:56.50,quantidade:5, imagem:"cafe_nuts.jpg"},
  ];

  public carregar(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe";
  }
}

