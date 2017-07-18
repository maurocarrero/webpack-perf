import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory as history } from 'react-router'

import './styles.css'

import App from './components/App'

// Routes
import kakashi from './routes/kakashi'
import lodashTest from './routes/lodashTest'
import ramdaTest from './routes/ramdaTest'

const rootRoute = {
  path: '/',
  component: App,
  indexRoute: kakashi,
  childRoutes: [
    kakashi,
    lodashTest,
    ramdaTest
  ]
}

ReactDOM.render(
  <Router history={history} routes={rootRoute}/>,
  document.getElementById('root')
)
