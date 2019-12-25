import React from 'react'
import {Avatar, Card, Skeleton} from 'antd'
import {connect} from "react-redux"
import {TweetsState} from "../reducers/tweets"
import {User} from "../actions/users"
import {Tweet} from "../actions/tweets"
import 'antd/dist/antd.css'

function TweetDetails({authedUser, users, tweets, match}: any) {
  const {Meta} = Card
  const tweet: Tweet = tweets[match.params.id]
  const author: User = users[tweet.author]
  return <Card>
    <Skeleton loading={!tweet || !author} avatar active>
      {tweet && author && (
        <Meta
          avatar={<Avatar src={author.avatarURL}/>}
          title={author.name}
          description={tweet.text}
        />
      )}
    </Skeleton>
  </Card>
}


const mapStateToProps = (state: { authedUser: string, users: any, tweets: TweetsState }) => ({
  authedUser: state.authedUser,
  users: state.users,
  tweets: state.tweets
})


export default connect(mapStateToProps)(TweetDetails)