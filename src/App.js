import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import GearDetails from "./component/gears/GearDetails";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateGears from "./component/gears/CreateGears";
import GearList from "./component/gears/GearList";
import EditGear from "./component/gears/EditGear";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/gear/:id" component={GearDetails} />
            <Route path="/gears/:id/edit" component={EditGear} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateGears} />
            <Route path="/gears" component={GearList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
