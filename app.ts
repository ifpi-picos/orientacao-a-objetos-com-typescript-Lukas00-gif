import { Curso } from "./agregacao/Curso";
import { Disciplina } from "./agregacao/Disciplina";
import { Professor } from "./agregacao/Professor";
import { Funcionario } from "./heranca/funcionario";
import { Empresa } from "./heranca/Empresa";
import { Pf } from "./heranca/Pf";
import { Pj } from "./heranca/pj";


const professor1: Professor  = new Professor("Jesiel");
const professor2: Professor  = new Professor("Aislan");
const disciplina1: Disciplina = new Disciplina("Programaçao Web II", 1, professor1);
const disciplina2: Disciplina = new Disciplina("Engenharia de Software IV", 2, professor2);
const curso1: Curso = new Curso("ADS - Análise e Desenvolvimento de Sistemas");
curso1.AddDisciplina(disciplina1);
curso1.AddDisciplina(disciplina2);
curso1.showDisciplina();


const empresa1: Empresa = new Empresa("Walter Media");
const funcionario1: Funcionario = new Pf("Joao", 2500.00, "12121212121");
const funcionario2: Funcionario = new Pj("Ricardo", 3500.00, "454545454545");
const funcionario3: Funcionario = new Pf("Pedrim Pedroso",1500.00 , "77777777777")
const funcionario4: Funcionario = new Pj("Lucas", 5500.00, "99999999999")
empresa1.addFuncionario(funcionario1);
empresa1.addFuncionario(funcionario2);
empresa1.addFuncionario(funcionario3);
empresa1.addFuncionario(funcionario4);
empresa1.showFuncionario();


