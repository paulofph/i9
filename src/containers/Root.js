import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './../App'
import './../index.scss'

const Root = ({ store }) => (
  <React.Fragment>
    <div className="pflex-row">
      <div className="pflex-column pflex-20p">
        test1
      </div>

      <div className="pflex-column pflex-20p">
        test2
      </div>
    </div>
    <div>
    <Provider store={store}>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </Provider>
    </div>
  </React.Fragment>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root