import {Dispatch} from "redux"
import {saveLikeToggle} from "../utils/api"

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const LIKE = 'LIKE'


interface ReceiveTweetsAction {
  type: typeof RECEIVE_TWEETS
  tweets: Tweets
}

interface LikeTweetAction {
  type: typeof LIKE
  authedUser: string
  tweetId: string
  hasLiked: boolean
}

export type TweetsActionTypes = ReceiveTweetsAction | LikeTweetAction

export interface Tweet {
  id: string
  text: string
  author: string
  timestamp: number
  likes: string[]
  replies: string[]
  replyingTo: string
}

export interface Tweets {
  [id: string]: Tweet
}

export function receiveTweets(tweets: Tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

export function like(id: string, hasLiked: boolean, authedUser: string) {
  return {
    type: LIKE,
    authedUser,
    tweetId: id,
    hasLiked
  }
}

export function likeTweet(id: string, hasLiked: boolean, authedUser: string) {
  return (dispatch: Dispatch) => {
    return saveLikeToggle({id, hasLiked, authedUser}).then(() => {
      return dispatch(like(id, hasLiked, authedUser))
    })
  }
}