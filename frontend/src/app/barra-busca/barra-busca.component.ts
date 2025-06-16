import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})

export class BarraBuscaComponent {
  public termoBusca : string = "";

  fazerBusca(){
    alert("Busca realizada");
    localStorage.setItem("termoBusca", this.termoBusca);
    location.href = "busca";
    console.log("Busca realizada: " + this.termoBusca);
    /*
    */
  }
}
