import React from 'react'
import {Input} from 'antd'
import {connect} from "react-redux"
import {saveTweet} from "../actions/tweets"

const {Search} = Input


// @ts-ignore
function Compose({authedUser, dispatch}) {
  return <Search placeholder='What is on your mind?' enterButton="Tweet" size='large'
                 onSearch={text => dispatch(saveTweet({text, author: authedUser, replyingTo: undefined}))}/>
}

const mapStateToProps = (state: { authedUser: string }) => ({
  authedUser: state.authedUser
})

export default connect(mapStateToProps)(Compose)