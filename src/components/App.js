import React, { Fragment, Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import ModulesList from './ModulesList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ModulesList />
        <Footer />
      </Fragment>
    )
  }
}

export default App