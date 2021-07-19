import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages"
import CommandsPage from "./pages/commands";
import LoginPage from "./pages/login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/commands" component={CommandsPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
