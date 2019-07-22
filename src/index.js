import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { HashRouter } from 'react-router-dom'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import 'bootstrap/dist/css/bootstrap-reboot.min.css' //TODO add var env for conditionally 'map'
import './css/index.scss'
import App from "./js/components/app.js"
import rootReducers from './js/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHashHistory()

const store = createStore(
  rootReducers(history),
  composeEnhancers(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
)


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)