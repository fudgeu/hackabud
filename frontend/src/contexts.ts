import { createContext, ReactNode } from 'react'

type ModalProvider = {
  setModal: (newModal: ReactNode) => void,
  closeModal: () => void,
}

type Session = {
  eventId: number,
  eventName: string,
  eventMaxMembers: number,
  userId: number,
  isInTeam: boolean,
  teamId: number | undefined,
  oauthId: string,
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
  eventMaxMembers: 0,
  userId: -1,
  isInTeam: false,
  teamId: undefined,
  oauthId: '',
  posts: [],
  reload: () => {},
  setEventId: () => {},
})
