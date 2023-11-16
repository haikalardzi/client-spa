import React from "react";
import ReactDOM from "react-dom/client";
import LoginView from "./view/Login";
import logo from '../../assets/images/logo.svg'
import { useLocation } from "react-router-dom";
import RegisterView from "./view/Register";

const AuthPage = () => {
    const location = useLocation();
    var view;
    if (location.pathname === "/login") {
        view = (<LoginView/>)
    } else if (location.pathname === "/register") {
        view = (<RegisterView />)
    }
    return (
        <div className="flex flex-col items-center gap-12">
            <a href="/" className="w-[25%] my-12 ">
                <img src={logo}
                className="bg-primary rounded"/>
            </a>
            <>
                {view}
            </>
        </div>
    )
}

export default AuthPage