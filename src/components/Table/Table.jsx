import React from 'react'
import TableItem from '../TableItem/TableItem';
import { TableContainer, Th } from './TableStyle'

const Table = ({itens, setItens}) => {
  const onDelete = (id) => {
    const newArray = itens.filter((transaction) => transaction.id !== id)
    setItens(newArray);
    localStorage.setItem("transaction", JSON.stringify(newArray));
  }

  return (
    <TableContainer>
        <thead>
            <tr>
                <Th width={40}>Descrição</Th>
                <Th width={40}>Valor</Th>
                <Th width={10} alignCenter>Tipo</Th>
                <Th width={10}></Th>
            </tr>
        </thead>
        <tbody>
          {itens?.map((item, index) => (
            <TableItem key={index} item={item} onDelete={onDelete} />
          ))}
        </tbody>
    </TableContainer>
  )
}

export default Table;