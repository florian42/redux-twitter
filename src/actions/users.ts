export const RECEIVE_USERS = 'RECEIVE_USERS'

interface ReceiveUsersAction {
  type: typeof RECEIVE_USERS
  users: [User]
}

export type UserActionTypes = ReceiveUsersAction

export interface User {
  id: string
  name: string
  avatarURL: string
  tweets: [string]
}

export function receiveUsers(users: [User]) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
