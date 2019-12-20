export const SET_AUTHED_USER = 'SET_AUTHED_USER'

interface AuthedUserAction {
  type: typeof SET_AUTHED_USER
  id: string
}

export type AuthedUserActionTypes = AuthedUserAction

export function setAutheduser(id: string) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}