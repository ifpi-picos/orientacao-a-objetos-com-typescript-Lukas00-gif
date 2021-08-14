export abstract class Funcionario {
    protected nome: string;
    protected salario: number;
    protected beneficios: Array<string>;
  
    constructor(nome: string, salario: number){
      this.nome = nome;
      this.salario = salario;
    }

    public getNome(): string{
      return this.nome;
    }

    public getBeneficios(): Array<string>{
      return this.beneficios;
    }
    
    public abstract getNetSalario(): number;
    
  }