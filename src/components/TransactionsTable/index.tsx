import React from 'react'
import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tran => (
            <tr key={tran.id}>
              <td>{tran.title}</td>
              <td className={tran.type}>
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(tran.amount)}
              </td>
              <td>{tran.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-br').format(
                  new Date(tran.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
