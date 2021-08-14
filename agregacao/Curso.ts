import { Disciplina } from "./Disciplina";

export class Curso {
  private nome: string;
  private disciplina: Array<Disciplina>;
  
  constructor(nome: string){
    this.nome = nome;
    this.disciplina = [];
  }

  public getNome(): string{
    return this.nome
  }

  public getDisciplina(): Array<Disciplina>{
    return this.disciplina
  }

  public AddDisciplina(s: Disciplina){
    this.disciplina.push(s);
  }

  public Removedisciplina(index: number){
    this.disciplina.splice(index, 1);
  }

  public showDisciplina(){
    this.disciplina.forEach(el => {
      console.log(`Disciplina: ${el.getNome}`);
      console.log(`professor: ${el.getProfessor().getNome()}`);
    });
  }
}
