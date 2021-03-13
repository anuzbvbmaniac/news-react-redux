import React from 'react';
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css'

const MainLayout = (props) => {
    return (
        <div style={{ minHeight: "640px" }} className="bg-gray-100">
            <div className="h-screen flex overflow-hidden bg-gray-100" data-todo-x-data="{ sidebarOpen: false }" data-todo-at-keydown-window-escape="sidebarOpen = false">
                {props.children}
                <ToastContainer/>
            </div>
        </div>
    );
};

export default MainLayout;
