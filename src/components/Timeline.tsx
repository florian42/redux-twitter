import React from "react"
import {connect} from "react-redux"

class Timeline extends React.Component<any, any> {
  render() {
    const {tweets} = this.props
    return (
      <div>
        <h1>Timeline</h1>
        {tweets && (
          <ul>
            {Object.keys(tweets).map(tweet => {
              return <li key={tweet}>TWEET ID: {tweet}</li>
            })}
          </ul>
        )}
      </div>
    )
  }
}

// @ts-ignore
function mapStateToProps(state) {
  const {users, tweets} = state
  return {
    tweets,
    users
  }
}

export default connect(mapStateToProps)(Timeline)