import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import GearDetails from "./component/gears/GearDetails";
import SignIn from "./component/auth/SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/gear/:id" component={GearDetails} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
