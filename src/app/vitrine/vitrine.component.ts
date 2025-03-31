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
    {codigo:1, nome:"Furadeira", descritivo:"Furadeira elétrica", valor:100, valorPromo:90,quantidade:5},
    {codigo:2, nome:"Serra", descritivo:"Serra mármore", valor:120, valorPromo:10,quantidade:6},
    {codigo:3, nome:"Parafusadeira", descritivo:"Parafusadeira 24v", valor:190, valorPromo:160,quantidade:5},
    {codigo:4, nome:"Conjunto parafuso", descritivo:"Conjunto de parafusos em caixa", valor:60, valorPromo:45,quantidade:0},
  ];

  public carregar(obj: Produto){
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe";
  }
}
