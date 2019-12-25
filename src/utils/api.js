import {_getTweets, _getUsers, _saveLikeToggle, _saveTweet,} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getTweets(),
  ]).then(([users, tweets]) => ({
    users,
    tweets,
  }))
}

export function saveLikeToggle(info) {
  return _saveLikeToggle(info)
}

export function saveTweetWithPromise(info) {
  return _saveTweet(info)
}