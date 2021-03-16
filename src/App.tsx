import React, { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  )

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </TransactionsProvider>
  )
}
