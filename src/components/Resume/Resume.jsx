import React from 'react'
import Card from '../Card/Card'
import { ResumeContainer } from './ResumeStyle'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"

const Resume = ({income, expense, total}) => {
  return (
    <ResumeContainer>
        <Card title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
        <Card title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
        <Card title="Total" Icon={FaDollarSign} value={total} />
    </ResumeContainer>
  )
}

export default Resume