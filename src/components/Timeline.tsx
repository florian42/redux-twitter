import React from "react"
import {connect} from "react-redux"
import {Avatar, Icon, List, Spin} from "antd"
import {likeTweet, Tweet} from "../actions/tweets"
import 'antd/dist/antd.css'
import Compose from "./Compose"
import {Link} from 'react-router-dom'


// @ts-ignore
const IconText = ({type, text, onClick, filled}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}} onClick={onClick} theme={filled ? 'filled' : 'outlined'}/>
    {text}
  </span>
)

class Timeline extends React.Component<any, any> {
  render() {
    const {tweets, users, authedUser, dispatch} = this.props
    if (!tweets || !users) {
      return (
        <Spin size="large"/>
      )
    }

    //<Icon type="info-circle" />
    return <div>
      <Compose/>
      {(
        <List
          loading={Object.keys(tweets).length < 1}
          size='large' itemLayout='vertical' dataSource={tweets} renderItem={(item: Tweet) => {
          return <List.Item
            key={item.id}
            actions={[
              <IconText type="like-o" text={item.likes.length} key="list-vertical-like-o" onClick={() => {
                dispatch(likeTweet(item.id, !item.likes.includes(authedUser), authedUser))
              }} filled={item.likes.includes(authedUser)}/>,
              <IconText type="message" text={item.replies.length} key="list-vertical-message" onClick={() => {
                console.log("Answer clicked")
              }} filled={false}/>,
            ]}>
            <List.Item.Meta
              avatar={users[item.author] && <Avatar src={users[item.author].avatarURL}/>}
              title={users[item.author] && <Link to={`tweets/${item.id}`}>{users[item.author].name}</Link>}
            />
            {item.text}
          </List.Item>
        }}
        />
      )}
    </div>
  }
}

// @ts-ignore
function mapStateToProps(state) {
  let {users, tweets, authedUser} = state
  tweets = Object.values(tweets)
  return {
    tweets,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Timeline)