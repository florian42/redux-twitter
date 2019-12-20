import {UserActionTypes} from "../actions/users"

export function users(state = {}, action: UserActionTypes) {
  switch (action.type) {
    case "RECEIVE_USERS":
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}