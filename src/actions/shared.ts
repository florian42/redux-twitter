import {Dispatch} from "react"
import {getInitialData} from "../utils/api"
import {receiveTweets} from "./tweets"
import {receiveUsers} from "./users"
import {setAutheduser} from "./authedUser"

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch: Dispatch<any>) => {
    return getInitialData().then(({users, tweets}) => {
      dispatch(receiveTweets(tweets))
      dispatch(receiveUsers(users))
      dispatch(setAutheduser(AUTHED_ID))
    })
  }
}