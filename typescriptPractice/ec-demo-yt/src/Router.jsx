import React from 'react'
// import {Route, Switch} from "react-router";
import { Routes, Route } from "react-router-dom";
import {SignUp} from "./templates";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/signup" component={SignUp} />
        </Routes>
    )
}

export default Router