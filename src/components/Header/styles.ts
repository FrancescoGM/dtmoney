import styled from 'styled-components'

export const Container = styled.nav`
  background-color: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;

    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`
