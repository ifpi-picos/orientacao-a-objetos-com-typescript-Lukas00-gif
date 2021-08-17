import { Funcionario } from "../heranca/Funcionario"
import { Empresa } from "../heranca/Empresa"
import { Pf } from "../heranca/pf"
import { Pj } from "../heranca/pj"


describe('Teste de empresa', ()=>{
  const NOME_EMPRESA = 'Dinamic Boston'
  it('deve add a empresa', ()=>{
    const empresa = new Empresa(NOME_EMPRESA)
    expect(empresa.getNome()).toBe(NOME_EMPRESA) 
  })

  it('deve add tres funcionario a empresa', ()=>{
    const empresa = new Empresa('Media Explore')
    const empresa1: Funcionario = new Pj('Carlos', 1000, '88888888888')
    empresa.addFuncionario(empresa1)
    const empresa2: Funcionario = new Pf('Sonia', 1200, '44444444444')
    empresa.addFuncionario(empresa2)
    const empresa3: Funcionario = new Pj('Tonya',1400 , '55555555555')
    empresa.addFuncionario(empresa3)
    expect(empresa.getFuncionarios().length).toBe(3)
  })
})



