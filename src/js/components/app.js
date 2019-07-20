import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/home'
import Board from '../views/board'

const App = () => (
  <div>
    <Switch>
      <Route path="/board" component={Board} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
)

export default App