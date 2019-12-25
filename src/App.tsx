import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {handleInitialData} from "./actions/shared"
import {connect} from "react-redux"
import Timeline from "./components/Timeline"
import './App.css'
import TweetDetails from "./components/Tweet"

const App: React.FC = (props) => {
  // @ts-ignore
  const {dispatch} = props
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Timeline}/>
        <Route path='/tweets/:id' component={TweetDetails}/>
      </div>
    </Router>
  )
}

// @ts-ignore
function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
