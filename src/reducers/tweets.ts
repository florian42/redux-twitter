import {TweetsActionTypes} from "../actions/tweets"

export function tweets(state = {}, action: TweetsActionTypes) {
  switch (action.type) {
    case "RECEIVE_TWEETS":
      return {
        ...state,
        ...action.tweets
      }
    default:
      return state
  }
}