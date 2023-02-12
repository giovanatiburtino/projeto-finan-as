import React, {useState} from 'react'
import { FormContainer, InputContent, RadioGroup } from './FormStyled'

const Form = () => {
  return (
    <FormContainer>
        <InputContent>
            <label>Descrição</label>
            <input type="text" />
        </InputContent>
        <InputContent>
            <label>Valor</label>
            <input type="number"/>
        </InputContent>
        <RadioGroup>
            <input type="radio"/>
            <label>Entrada</label>
            <input type="radio"/>
            <label>Saída</label>
        </RadioGroup>
    </FormContainer>
  )
}

export default Form