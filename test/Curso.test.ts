import { Curso } from "../agregacao/Curso"
import { Disciplina } from "../agregacao/Disciplina"
import { Professor } from "../agregacao/Professor"


describe('teste_curso', () => {
  const ADS_CURSO_NOME = 'Análise e Desenvolvimento de Sistemas'
  const DW_DISCIPLINA_NOME = 'Programacao web II'
  const ES_DISCIPLINA_NOME = 'Engenharia de Software'
  it('deve criar o nome com o curso', ()=>{
    const curso = new Curso(ADS_CURSO_NOME)
    expect(curso.getNome()).toBe(ADS_CURSO_NOME)
  })

  it('deve adicionar a diciplina no curso', ()=>{
    const curso = new Curso(ADS_CURSO_NOME)
    const professor1 = new Professor('jesiel')
    const web = new Disciplina(DW_DISCIPLINA_NOME, 1, professor1)
    curso.AddDisciplina(web)
    expect(curso.getDisciplina().length).toBe(1)
  })

  it('add duas disciplina ao curso', () => {
    const curso = new Curso(ADS_CURSO_NOME)
    const professor1 = new Professor('aislan')
    const web = new Disciplina(DW_DISCIPLINA_NOME, 1, professor1)
    const es = new Disciplina(ES_DISCIPLINA_NOME, 1, professor1)
    curso.AddDisciplina(web)
    curso.AddDisciplina(es)
    expect(curso.getDisciplina().length).toBe(2)
  })
})


