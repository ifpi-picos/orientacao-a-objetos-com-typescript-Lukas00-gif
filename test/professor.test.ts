import { Professor } from "../agregacao/Professor"

describe('teste de professor', ()=>{
  const NOME_PROFESSOR = 'aislan'
  it('deve criar um professro com o nome de aislan', ()=>{
    const professor1 = new Professor(NOME_PROFESSOR)
    expect(professor1.getNome()).toBe(NOME_PROFESSOR)
  })
})



