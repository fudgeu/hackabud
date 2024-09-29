import { createContext, ReactNode } from 'react'

type ModalProvider = {
  setModal: (newModal: ReactNode) => void,
  closeModal: () => void,
}

type Session = {
  eventId: number,
  eventName: string,
  posts: Post[],
  reload: () => void,
  setEventId: (id: number) => void,
}

export const ModalContext = createContext<ModalProvider>({
  setModal: (_) => {},
  closeModal: () => {},
})

export const SessionContext = createContext<Session>({
  eventId: -1,
  eventName: '',
  posts: [],
  reload: () => {},
  setEventId: () => {},
})
