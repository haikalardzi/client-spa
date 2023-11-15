import React from "react";
import ReactDOM from "react-dom/client";
import NavigationBar from "../NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <NavigationBar />
            </nav>
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Layout;