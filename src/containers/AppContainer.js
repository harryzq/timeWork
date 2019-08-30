import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }


  render() {
    const { history, routes, routerKey, store } = this.props
    return (
      <Provider store={store}>
        <Router
          history={history}
          children={routes}
          key={routerKey} 
        >
        </Router>
      </Provider>
    )
  }
}

export default AppContainer
