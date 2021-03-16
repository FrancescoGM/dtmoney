export interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: Date
}
export type CreateTransactionProps = Omit<Transaction, 'id' | 'createdAt'>
