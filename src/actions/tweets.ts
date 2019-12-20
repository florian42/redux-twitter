export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

interface ReceiveTweetsAction {
  type: typeof RECEIVE_TWEETS
  tweets: Tweets
}

export type TweetsActionTypes = ReceiveTweetsAction

export interface Tweet {
  id: string
  text: string
  author: string
  timestamp: number
  likes: [string]
  replies: [string]
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