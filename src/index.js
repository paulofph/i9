import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers/reducers'
import Root from './components/Root'
import 'typeface-roboto'

import configureStore from './_config/configureStore'

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
)