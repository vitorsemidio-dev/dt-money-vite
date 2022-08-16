import * as Dialog from '@radix-ui/react-dialog'
import { useCallback, useState } from 'react'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  const [open, setOpen] = useState(false)

  const handleCloseDialog = useCallback(() => {
    setOpen(false)
  }, [open, setOpen])

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal onSuccessSubmit={handleCloseDialog} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
