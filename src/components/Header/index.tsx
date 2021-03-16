import React from 'react'
import DtLogo from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransaction(): void
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewTransaction
}): JSX.Element => {
  return (
    <Container>
      <Content>
        <img src={DtLogo} alt="Dt Money" />
        <button type="button" onClick={onOpenNewTransaction}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
