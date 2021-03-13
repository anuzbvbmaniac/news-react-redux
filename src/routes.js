import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/home";
import Header from "./components/header";

import MainLayout from "./hoc/main_layout";

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <MainLayout>
            <Switch>
                <Route patth="/" component={Home}/>
            </Switch>
        </MainLayout>
    </BrowserRouter>
)

export default Routes;
