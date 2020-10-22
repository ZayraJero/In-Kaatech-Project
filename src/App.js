import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar';

import Main from './container/Main'
import AboutUs from './container/AboutUs'
import MeetUs from './container/MeetUs'
import HelpUs from './container/HelpUs'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/nosotros" component={AboutUs} />
        <Route exact path="/conocenos" component={MeetUs} />
        <Route exact path="/ayudanos" component={HelpUs} />
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

