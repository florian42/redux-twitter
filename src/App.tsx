import React, {useEffect} from 'react'
import {handleInitialData} from "./actions/shared"
import {connect} from "react-redux"
import Timeline from "./components/Timeline"
import './App.css'
import Compose from "./components/Compose"

const App: React.FC = (props) => {
  // @ts-ignore
  const {dispatch} = props
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])
  return (
    <div className="App">
      <Compose/>
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
