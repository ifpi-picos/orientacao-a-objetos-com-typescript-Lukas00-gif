import { Funcionario } from "../heranca/Funcionario"
import { Pj } from "../heranca/pj"
import { Pf } from "../heranca/pf"


describe('teste de funcionario', () => {
  const EMP_NOME = 'Ricardo'
  const EMP_SALARIO = 1500
  const EMP_CPF = '11111111144'
  const EMP_CNPJ = '78787878787'

  it('deve add um funcionario', ()=>{
    const empresa1: Funcionario = new Pf(EMP_NOME, EMP_SALARIO, EMP_CPF)
    expect(empresa1.getNome()).toBe(EMP_NOME)
    expect(empresa1.getBeneficios().length).toBe(3)
  })

  it('add um funcionario com o valor de 1350 com o pf', ()=>{
    const empresaPF: Funcionario = new Pf(EMP_NOME, EMP_SALARIO, EMP_CPF)
    expect(empresaPF.getNetSalario()).toBe(1350)
  })
  
  it('add um funcionario com o valor de 1425 com o pf', ()=>{
    const empresaPj: Funcionario = new Pj(EMP_NOME, EMP_SALARIO, EMP_CNPJ)
    expect(empresaPj.getNetSalario()).toBe(1425)
  })
})



