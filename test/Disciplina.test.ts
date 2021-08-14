import { Disciplina } from "../agregacao/Disciplina"
import { Professor } from "../agregacao/Professor"


describe('Teste de disciplina', ()=>{
  const PW_NOME = 'Programacao Web II'
  it('deve criar uma disciplica com esse nome', ()=>{
    const professor1 = new Professor('jesiel')
    const pw = new Disciplina(PW_NOME, 1, professor1)
    expect(pw.getNome()).toBe(PW_NOME)
  })
})

