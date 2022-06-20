import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/sections/Home/Home'
import { SignIn } from './components/sections/Auth/SignIn'
import { SignUp } from './components/sections/Auth/SignUp'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
  )
}

export default App
