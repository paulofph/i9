import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './_shared/Side-Bar'
import App from './../App'

import './../index.scss'

const Root = ({ store }) => (
  <React.Fragment>
    <div className="pflex-row pflex-100p" style={{height: '100vh'}}>
      <div className="pflex-column pflex-15p" style={{background: '#163837'}}>
        <SideBar />
      </div>

      <div className="pflex-column pflex-20p">
      <Provider store={store}>
        <Router>
          <Route path="/:filter?" component={App} />
        </Router>
      </Provider>
      </div>
    </div>
  </React.Fragment>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root