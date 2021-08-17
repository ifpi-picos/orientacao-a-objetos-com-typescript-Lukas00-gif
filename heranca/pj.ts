import { Funcionario } from "./Funcionario";

export class Pj extends Funcionario{
  private cnpj: string;
  constructor(nome: string, salario: number, cnpj: string){
    super(nome, salario);
    this.cnpj = cnpj;
    this.beneficios = ["Plano de Saúde"];
  }
  
  // @Override
  public getNetSalario():number {
    return this.salario - (this.salario * 0.05);
  }

}