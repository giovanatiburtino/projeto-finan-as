import React from 'react'
import { CardContainer, CardHeader, CardTitle, CardTotal } from './CardStyled'

const Card = ({ title, Icon, value}) => {
  return (
    <CardContainer>
        <CardHeader>
           <CardTitle>{title}</CardTitle> 
           <Icon />
        </CardHeader>
        <CardTotal>{value}</CardTotal>
    </CardContainer>
  )
}

export default Card