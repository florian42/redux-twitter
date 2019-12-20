import React, {useEffect} from 'react'
import {handleInitialData} from "./actions/shared"
import {connect} from "react-redux"
import Timeline from "./components/Timeline"
import './App.css'

const App: React.FC = (props) => {
  // @ts-ignore
  const {dispatch} = props
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])
  return (
    <div className="App">
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
