import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Login from "./views/Login";
import RecoverPassword from "./views/RecoverPassword";
import Module from "./views/modules/Module";
import AcademicSchedule from "./views/modules/AcademicSchedule/AcademicSchedule";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />

          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/recuperarClave" component={RecoverPassword} />

          <Route path="/calendarioAcademico" component={AcademicSchedule} />
          <Route path="/gestionCurricular" component={Module} />
          <Route path="/bancoDeProyectos" component={Module} />
          <Route path="/orientacionAcademica" component={Module} />
          <Route path="/redesSociales" component={Module} />

          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
