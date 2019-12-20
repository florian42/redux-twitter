import React from "react"
import {connect} from "react-redux"
import {Avatar, Icon, List, Spin, Typography} from "antd"
import {Tweet} from "../actions/tweets"
import 'antd/dist/antd.css'

const {Title} = Typography

// @ts-ignore
const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
)

class Timeline extends React.Component<any, any> {
  render() {
    const {tweets, users} = this.props
    if (!tweets || !users) {
      return (
        <Spin size="large"/>
      )
    }
    return <div>
      <Title>Timeline</Title>
      {(
        <List
          loading={Object.keys(tweets).length < 1}
          size='large' itemLayout='vertical' dataSource={tweets} renderItem={(item: Tweet) => {
          return <List.Item
            key={item.id}
            actions={[
              <IconText type="like-o" text={item.likes.length} key="list-vertical-like-o"/>,
              <IconText type="message" text={item.replies.length} key="list-vertical-message"/>,
            ]}>
            <List.Item.Meta
              avatar={users[item.author] && <Avatar src={users[item.author].avatarURL}/>}
              title={users[item.author] && users[item.author].name}
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
  let {users, tweets} = state
  tweets = Object.values(tweets)
  return {
    tweets,
    users
  }
}

export default connect(mapStateToProps)(Timeline)