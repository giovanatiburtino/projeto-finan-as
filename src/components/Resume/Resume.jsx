import React from 'react'
import Card from '../Card/Card'
import { ResumeContainer } from './ResumeStyle'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"

const Resume = () => {
  return (
    <ResumeContainer>
        <Card title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000"/>
        <Card title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
        <Card title="Total" Icon={FaDollarSign} value="1000"/>
    </ResumeContainer>
  )
}

export default Resume