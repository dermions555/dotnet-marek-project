import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/pages/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import PrivateRoute from "./components/route/PrivateRoute";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute path="/dashboard" component={Dashboard}/>
                        <PrivateRoute path="/contacts" component={Dashboard}/>
                        <PrivateRoute path="/opportunities" component={Dashboard}/>
                        <PrivateRoute path="/companies" component={Dashboard}/>
                        <PrivateRoute path="/tasks" component={Dashboard}/>
                        <PrivateRoute path="/users" component={Dashboard}/>
                        <Route path="/sign-up" component={SignUp}/>
                        <Route path="/sign-in" component={SignIn}/>
                    </Switch>
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
