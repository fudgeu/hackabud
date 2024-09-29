type Post = {
  id: number,
  eventId: number,
  authorId: number,
  subject: string,
  body: string,
}

type NotificationJson = {
  id: number,
  userId: number,
  date: string,
  message: string,
  invitationId: number,
}

type InviteJson = {
  id: number,
  fromTeamId: number,
  toUserId: number,
}

type TeamJson = {
  id: number,
  eventId: number,
  leaderId: number,
}
