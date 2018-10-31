import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ModulesList from './components/ModulesList'
import Home from './views/Home'
import Login from './views/Login'

import './styles/App.css'

const App = () => {
  return (
    <Router>
			<Fragment>
        <Header />
				<div className="main--content">
					<Route path="/" component={Home} exact />
					<Route path="/" component={Login} exact />
				</div>
        <ModulesList />
        <Footer />
      </Fragment>
    </Router>
  )
}

export default App
