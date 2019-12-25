import {Dispatch} from "redux"
import {saveLikeToggle, saveTweetWithPromise} from "../utils/api"

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const LIKE = 'LIKE'
export const SAVE_TWEET = 'SAVE_TWEET'


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

interface SaveTweetAction {
  type: typeof SAVE_TWEET
  tweet: Tweet
}

export type TweetsActionTypes = ReceiveTweetsAction | LikeTweetAction | SaveTweetAction

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

export function tweetAction(tweet: Tweet) {
  return {
    type: SAVE_TWEET,
    tweet
  }
}

// @ts-ignore
export function saveTweet({text, author, replyingTo}) {
  return (dispatch: Dispatch) => {
    return saveTweetWithPromise({text, author, replyingTo}).then((tweet: Tweet) => {
      return dispatch(tweetAction(tweet))
    })
  }
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