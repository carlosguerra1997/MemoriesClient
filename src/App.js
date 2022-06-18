import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Auth } from './components/sections/Auth/Auth'
import { Home } from './components/sections/Home/Home'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </Router>
  )
}

export default App
