import React from 'react'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa"
import { Td } from './TableItemStyle'

const TableItem = ({item, onDelete}) => {
    
  return (
    <tr>
        <Td>{item.description}</Td>
        <Td>{item.amount}</Td>
        <Td alignCenter>{item.expense?(
            <FaRegArrowAltCircleDown color="red"/>
        ) : (
            <FaRegArrowAltCircleUp color="green" />
        )}</Td>
        <Td alignCenter>
            <FaTrash onClick={() => onDelete(item.id)}/>
        </Td>
    </tr>
  )
}

export default TableItem