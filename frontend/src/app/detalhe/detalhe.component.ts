import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})

export class DetalheComponent implements OnInit {
  produto: Produto = new Produto();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const temp = new Produto();
    temp.codigo = id;

    this.produtoService.carregar(temp).subscribe({
      next: (res: Produto) => {
        this.produto = res;
        console.log("Produto carregado:", this.produto);
      },
      error: (err: any) => {
        console.error("Erro ao buscar produto:", err);
      }
    });
  }

  adicionarNaCesta() {
    const item: ItemCesta = {
      codigo: this.produto.codigo,
      nome: this.produto.nome,
      valor: this.produto.valor,
      valorPromo: this.produto.valorPromo,
      descritivo: this.produto.descritivo,
      imagem: this.produto.imagem,
      quantidade: 1,
      total: this.produto.valor // valor * quantidade
    };

    let lista: ItemCesta[] = [];

    const json = localStorage.getItem("cesta");
    if (json !== null) {
      lista = JSON.parse(json);
    }

    lista.push(item);
    localStorage.setItem("cesta", JSON.stringify(lista));

    // Redirecionar para a página da cesta
    this.router.navigate(['/cesta']);
  }
}

  /*
  detalhe_produto: Produto[] = [
    {codigo:11, nome:"Café Raízes do Brasil – 180g", descritivo:"Cultivado em terras brasileiras ricas e tropicais, o Café Raízes do Brasil traz uma torra média equilibrada, corpo marcante e notas sutis de chocolate amargo. Ideal para quem valoriza tradição e sabor na medida certa.", valor:40.50, valorPromo:38.00,quantidade:5, imagem:"cafe_brazil.jpg"},
  ];

  public carregar(obj: Produto) {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./cesta";
  }
   */
