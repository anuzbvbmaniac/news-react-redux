import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/home";
import Contact from "./components/contact";

import Header from "./components/header";
import MainLayout from "./hoc/main_layout";

const Routes = () => (
    <BrowserRouter>
        <MainLayout>
            <Header/>
            <Switch>
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Home}/>
            </Switch>
        </MainLayout>
    </BrowserRouter>
)

export default Routes;
