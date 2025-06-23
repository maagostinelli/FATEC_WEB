import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})

export class BarraBuscaComponent {
  public mensagem: string = "";
  public lista: Produto[] = [];
  public termoBusca: string = "";

  constructor(private produtoService: ProdutoService, private router: Router){}

  fazerBusca(termoBusca: string) {
    localStorage.setItem("termoBusca", this.termoBusca);
    this.router.navigate(['/busca', termoBusca]);
    console.log("Busca realizada: " + this.termoBusca);
  }
}

/*
@GetMapping("produtos/busca/{termo}")
public List<Produto> fazerBusca(@PathVariable("termo") String termo){
    return bd.fazerBusca("%"+ termo + "%");
}
*/