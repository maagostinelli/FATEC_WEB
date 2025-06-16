import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ou apenas NgIf
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mensagem: string = "";
  cliente: Cliente = new Cliente();

  constructor(private service: ClienteService) {
  }

  public gravar() {
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