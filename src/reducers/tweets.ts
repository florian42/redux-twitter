import {Tweet, TweetsActionTypes} from "../actions/tweets"

export interface TweetsState {
  [tweetId: string]: Tweet
}

const initialState: TweetsState = {}

export function tweets(state = initialState, action: TweetsActionTypes): TweetsState {
  switch (action.type) {
    case "RECEIVE_TWEETS":
      return {
        ...state,
        ...action.tweets
      }
    case "LIKE":
      return {
        ...state,
        [action.tweetId]: {
          ...state[action.tweetId],
          likes: action.hasLiked ? state[action.tweetId].likes.concat([action.authedUser]) : state[action.tweetId].likes.filter(uid => uid !== action.authedUser)
        }
      }
    case "SAVE_TWEET":
      return {
        ...state,
        [action.tweet.id]: action.tweet
      }
    default:
      return state
  }
}