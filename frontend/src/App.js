import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import PrivateRoute from "./components/route/PrivateRoute";

class App extends Component {
    render() {
        if(1 === 1) { // TODO: This is just temporary before we implement authentication
            return (
                <BrowserRouter>
                    <div>
                        <Nav/>
                        <Switch>
                            <PrivateRoute path="/sign-in" component={Dashboard}/>
                            <Route path="/dashboard" component={Dashboard}/>
                        </Switch>
                        <p>Edit <code>src/App.js</code> and save to reload.</p>
                    </div>
                </BrowserRouter>
            )
        } else { // TODO: Here goes login page user is redirected to when not authenticated
            return (
                <SignIn/>
            )
        }
    }
}

export default App;
