import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/navbar'
import Home from '../views/home'
import Board from '../views/board'

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route path="/board/:id" component={Board} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
)

export default App