import React, { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

import Modal, { Props as ModalProps } from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps extends ModalProps {
  onRequestClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  onRequestClose,
  ...rest
}) => {
  const { createTransaction } = useTransactions()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({ title, category, amount, type })
    onRequestClose()
    setTitle('')
    setCategory('')
    setAmount(0)
    setType('deposit')
  }

  return (
    <Modal
      onRequestClose={onRequestClose}
      {...rest}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar Modal" />
        </button>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={({ target: { value } }) => setAmount(Number(value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            activeColor="green"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            activeColor="red"
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={({ target: { value } }) => setCategory(value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
