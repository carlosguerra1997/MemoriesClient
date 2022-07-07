import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import { Home } from './components/sections/Home/Home'
import { SignIn } from './components/sections/Auth/SignIn'
import { SignUp } from './components/sections/Auth/SignUp'
import { PostDetailsLayout } from './components/sections/Posts/details/PostDetailsLayout'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={() => <Redirect to='/posts' />} />
        <Route path='/posts' exact component={Home} />
        <Route path='/posts/search' exact component={Home} />
        <Route path='/posts/:id' component={PostDetailsLayout} />
        <Route path='/sign-in' exact component={SignIn} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
  )
}

export default App
