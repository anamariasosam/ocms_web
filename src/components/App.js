import React, { Fragment, Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import ModulesList from './ModulesList'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-content"></div>
        <ModulesList />
        <Footer />
      </Fragment>
    )
  }
}

export default App
