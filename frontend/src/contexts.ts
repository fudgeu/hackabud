import {createContext, ReactNode} from 'react'

type ModalProvider = {
  setModal: (newModal: ReactNode) => void,
  closeModal: () => void,
}

export const ModalContext = createContext<ModalProvider>({
  setModal: (_) => {},
  closeModal: () => {},
})
