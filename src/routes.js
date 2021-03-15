import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/home";
import Contact from "./components/contact";

import Header from "./components/header";
import MainLayout from "./hoc/main_layout";
import Article from "./components/posts";

const Routes = () => (
    <BrowserRouter>
        <MainLayout>
            <Header/>
            <Switch>
                <Route path="/article/:id" component={Article}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Home}/>
            </Switch>
        </MainLayout>
    </BrowserRouter>
)

export default Routes;
