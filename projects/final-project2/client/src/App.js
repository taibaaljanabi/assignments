
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./Navbar";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
// import TasksList from "./Tasks/TasksList";
import ProjectsList from './Projects/ProjectsList'
import ProtectedRoute from "./Auth/ProtectedRoute"

function App() {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                {/* <ProtectedRoute path="/tasks" component={TasksList}/> */}
                <ProtectedRoute path="/projects" component={ProjectsList}/>
                <Route exact path="/" render={() => <Redirect to="/projects"/>}/>
            </Switch>
        </div>
    )
}

export default App;