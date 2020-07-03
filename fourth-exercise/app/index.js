import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'stylesheets/vendor/sanitize.css'
import 'stylesheets/vendor/reset.css'
import 'stylesheets/global.sass'

import Main from 'pages/Main'

import createStore from 'store'

const store = createStore()

const App = (
  <Provider store={store}>
    <Main />
  </Provider>
)

ReactDOM.render(App, document.getElementById('jampp-app'))
