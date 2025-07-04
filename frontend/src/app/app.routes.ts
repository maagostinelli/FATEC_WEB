import { Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { CestaComponent } from './cesta/cesta.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BuscaComponent } from './busca/busca.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    {
        path: 'busca/:termo',
        loadComponent: () => import('./busca/busca.component').then(m => m.BuscaComponent)
    },
    {path: "cadastro-cliente", component:CadastroClienteComponent},
    {path: "cesta", component:CestaComponent},
    {path: "contato", component:ContatoComponent},
    {path: "detalhe/:id", component: DetalheComponent},
    {path: "login", component:LoginComponent},
    {path: "sobre", component:SobreComponent},
    {path: "", component:VitrineComponent},
];
