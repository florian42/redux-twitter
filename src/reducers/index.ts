import {users} from "./users"
import {combineReducers} from "redux"
import {tweets} from "./tweets"
import authedUser from "./authedUser"
// @ts-ignore
export default combineReducers({users, tweets, authedUser})