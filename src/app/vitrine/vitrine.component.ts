import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  mensagem: String = "";
  produtos: Produto[] = [
    {codigo:11, nome:"Poster Let's take a coffe", descritivo:"Poster design minimal 24x36", valor:60.50, valorPromo:49.99,quantidade:6, imagem:"gallery04.png"},
    {codigo:31, nome:"Poster Exclusivo SP.com Design", descritivo:"Poster coleção exclusiva by Maris 24x36", valor:60.50, valorPromo:49.99,quantidade:5, imagem:"gallery03.png"},
    {codigo:21, nome:"Café Brasileiro - 180g", descritivo:"Café torrado moído", valor:40.50, valorPromo:38.00,quantidade:5, imagem:"cafe_brazil.jpg"},
    {codigo:41, nome:"Café Especial Etiópia - 180g", descritivo:"Café etíope torrado moído", valor:56.60, valorPromo:48.00,quantidade:6, imagem:"cafe_ethiopia.jpg"},
    {codigo:51, nome:"Café de Nuts Especial - 180g", descritivo:"Café torrado notas de avelã", valor:60.00, valorPromo:56.50,quantidade:5, imagem:"cafe_nuts.jpg"},
    {codigo:61, nome:"Copo colecionável - SP.com", descritivo:"Copo coleção exclusiva de lançamento", valor:60.00, valorPromo:45.00,quantidade:0, imagem:"copo_colecao_01.jpg"},
  ];

  public carregar(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe";
  }
}
