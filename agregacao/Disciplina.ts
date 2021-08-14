import { Professor } from "./Professor";

export class Disciplina {
  private nome: string;
  private ch: number;
  private professor: Professor;
  constructor(nome: string, ch: number, professor: Professor){
    this.nome = nome;
    this.ch = ch;
    this.professor = professor;
  }

  public getNome(): string{
    return this.nome
  }

  public getProfessor(): Professor{
    return this.professor
  }
  
}


