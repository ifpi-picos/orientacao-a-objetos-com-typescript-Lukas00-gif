import { Funcionario } from "./funcionario";

export class Pf extends Funcionario{
  private cpf: string;
  constructor(nome: string, salario: number, cpf: string){
    super(nome, salario);
    this.cpf = cpf;
    this.beneficios = ["Plano de Saúde", "Vale Refeição", "férias"];
  }
  
  // @Override
  public getNetSalario():number {
    return this.salario - (this.salario * 0.1);
  }

}