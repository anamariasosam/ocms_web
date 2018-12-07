import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Login from './views/Login'
import Logout from './views/Logout'
import Team from './views/Team'
import About from './views/About'
import Contact from './views/Contact'
import RecoverPassword from './views/RecoverPassword'
import Module from './views/modules/Module'
import AcademicSchedule from './views/AcademicSchedule/AcademicSchedule'
import './styles/App.css'
import 'moment/locale/es'

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/equipo" component={Team} />
        <Route path="/about" component={About} />
        <Route path="/contactenos" component={Contact} />
        <Route path="/recuperarClave" component={RecoverPassword} />

        <Route path="/calendarioAcademico" component={AcademicSchedule} />
        <Route path="/gestionCurricular" component={Module} />
        <Route path="/bancoDeProyectos" component={Module} />
        <Route path="/orientacionAcademica" component={Module} />
        <Route path="/redesSociales" component={Module} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Fragment>
  </Router>
)

export default App
