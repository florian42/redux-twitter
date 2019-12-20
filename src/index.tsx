import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {compose, createStore} from "redux"
import reducer from './reducers'
import {Provider} from 'react-redux'
import middleware from './middleware'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  middleware,
  // other store enhancers if any
)

// @ts-ignore
const store = createStore(reducer, enhancer)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
