import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Home from './src/components/Home'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('root')
)
