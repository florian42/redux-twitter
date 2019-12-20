import React, {useEffect} from 'react'
import {handleInitialData} from "./actions/shared"
import {connect} from "react-redux"
import Timeline from "./components/Timeline"

const App: React.FC = (props) => {
  // @ts-ignore
  const {dispatch} = props
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Timeline/>
    </div>
  )
}

// @ts-ignore
function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
