import { Funcionario } from "./funcionario";

export class Empresa {
  private nome: string;
  private funcionarios: Array<Funcionario> = [];
  constructor(nome: string){
    this.nome = nome;
  }

  getNome(): string{
    return this.nome
  }

  getFuncionarios(): Array<Funcionario>{
    return this.funcionarios
  }

  public addFuncionario(e: Funcionario){
    this.funcionarios.push(e);
  }

  public showFuncionario(){
    this.funcionarios.forEach(e=>{
      console.log(`nome: ${e.getNome()} \n`);
      console.log(`salario liquido: ${e.getNetSalario()} \n`);
      console.log(`Benefícios: `);
      e.getBeneficios().forEach(b => {
      console.log(`${b}`);
      })
    });
  }
}