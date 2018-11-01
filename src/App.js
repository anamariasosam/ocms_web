import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ModulesList from './components/ModulesList'
import Home from './views/Home'
import Login from './views/Login'
import RecoverPassword from './views/RecoverPassword'
import Module from './views/modules/Module'

import './styles/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="main--content">
            <Route path="/" component={Home}  />
            <Route path="/login" component={Login} />
            <Route path="/recuperarClave" component={RecoverPassword} />
            <Route path="/modulo/:nombreMdulo" component={Module} />
          </div>
          <ModulesList />
          <Footer />
        </Fragment>
      </Router>
    )
  }
}

export default App
