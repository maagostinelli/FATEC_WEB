import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../service/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.css'
})
export class CadastroClienteComponent {
    mensagem: string = "";
    cliente: Cliente = new Cliente();
  
    constructor(private service: ClienteService) {
    }
  
    public gravar() {
      console.log(this.cliente);
      this.service.gravar(this.cliente).subscribe({
        next: () => {
          this.mensagem = "Cadastro realizado com sucesso!";
          this.cliente = new Cliente(); // Limpa o formulário
        },
        error: () => {
          this.mensagem = "Ocorreu um erro ao cadastrar. Tente novamente mais tarde.";
        }
      });
    }

}
