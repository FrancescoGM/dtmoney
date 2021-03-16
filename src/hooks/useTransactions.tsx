import React, { createContext, useContext, useEffect, useState } from 'react'
import { CreateTransactionProps, Transaction } from '../models/Transaction'
import { create, list } from '../services/transactions'

interface TransactionContextProps {
  transactions: Transaction[]
  createTransaction: (transaction: CreateTransactionProps) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
)

export const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function getData() {
      const res = await list()
      setTransactions(res.transactions)
    }
    getData()
  }, [])

  async function createTransaction(transaction: CreateTransactionProps) {
    const res = await create(transaction)
    setTransactions([res.transaction, ...transactions])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(): TransactionContextProps {
  const context = useContext(TransactionsContext)
  return context
}
export default TransactionsContext
