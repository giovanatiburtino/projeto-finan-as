import React, {useState} from 'react'
import Table from '../Table/Table';
import { Button, FormContainer, InputContent, RadioGroup } from './FormStyled'

const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateId = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if(!description || !amount){
      alert("Por favor informe a descrição e o valor.")
      return;
    } else if (amount < 1){
      alert("O valor tem que ser positivo.")
      return;
    }

    const transaction = {
      id: generateId(),
      description: description,
      amount: amount,
      expense: isExpense
    }

    handleAdd(transaction)

    setDescription("")
    setAmount("")
  }

  return (
    <>
      <FormContainer>
          <InputContent>
              <label>Descrição</label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </InputContent>
          <InputContent>
              <label>Valor</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </InputContent>
          <RadioGroup>
              <input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)}/>
              <label htmlFor="rIncome">Entrada</label>
              <input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)}/>
              <label htmlFor="rExpenses">Saída</label>
          </RadioGroup>
          <Button onClick={handleSave}>ADICIONAR</Button>
      </FormContainer>
      <Table itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form