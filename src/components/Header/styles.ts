import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.screens.desktop};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme.colors['green-500']};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  :focus {
    outline: 1px solid ${(props) => props.theme.colors['green-500']};
    outline-offset: 4px;
  }
  &:hover {
    background: ${(props) => props.theme.colors['green-700']};
    transition: background-color 0.2s;
  }
`
