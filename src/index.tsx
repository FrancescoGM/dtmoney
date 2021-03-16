import React from 'react'
import { render } from 'react-dom'

import { App } from './App'
import { createServer, Model } from 'miragejs'
import { GlobalStyles } from './styles/global'

createServer({
  models: {
    transaction: Model
  },
  seeds: server => {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Trabalho',
          amount: 6000,
          createdAt: new Date('2021-02-10 10:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Despesas',
          amount: 1100,
          createdAt: new Date('2021-02-04 10:00:00')
        }
      ]
    })
  },
  routes: function () {
    this.namespace = 'api'
    this.get('/transaction', () => {
      return this.schema.all('transaction')
    })
    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', { ...data, createdAt: new Date() })
    })
  }
})

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
