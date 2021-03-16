import { api } from './api'
import { CreateTransactionProps, Transaction } from '../models/Transaction'

export async function list(): Promise<{
  transactions: Transaction[]
}> {
  return new Promise((resolve, reject) => {
    api
      .get('/transaction')
      .then(res => resolve(res.data))
      .catch(error => reject(error))
  })
}
export async function create(
  data: CreateTransactionProps
): Promise<{ transaction: Transaction }> {
  return new Promise((resolve, reject) => {
    api
      .post('/transaction', data)
      .then(res => resolve(res.data))
      .catch(error => reject(error))
  })
}
