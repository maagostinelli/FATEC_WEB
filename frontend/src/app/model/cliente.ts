export class Cliente {
    codigo: number = 0;
    nome: string = "";
    email: string = "";
    documento: string = "";
    logradouro: string = "";
    senha: string = "";
    autoriza: number = 0; // 0 - Não autoriza, 1 - Autoriza
    telefone: string = "";
}

/**
 * @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    private String nome;
    private String email;
    private String documento;
    private String logradouro;
    private String senha;
    private String autoriza;
    private String telefone;
 */