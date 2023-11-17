import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { Bars3Icon , ShoppingCartIcon, UserIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/images/logo.svg';
import '../../assets/styles/Button/Button.css'
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { getUsername, logout } from "../../utils/auth";
import Sidebar from "./SideBar";

const NavigationBar = () => {
    const location = useLocation();
    const NavbarExcludedPages = ["/login", "/register"]
    const [NavbarUsername, setNavbarUsername] = useState("")
    const [SidebarVisible, setSidebarVisible] = useState(false);
    useEffect(() => {
        const fetchData = () => {
            const username = getUsername();
            setNavbarUsername(username);
        };
        fetchData();
    }, []);
    
    
    if (NavbarExcludedPages.indexOf(location.pathname) != -1) {
        return null;
    }
    function toggleSidebar() {
        setSidebarVisible(!SidebarVisible);
    }

    return (
        <>
            <div className=
            "fixed w-full bg-quaternary flex p-3 items-center gap-2 justify-start z-10">
                <div className="btn-primary flex items-stretch"> 
                    <button onClick={toggleSidebar}>
                        <Bars3Icon className="h-6 w-6 text-tertiary "/>
                    </button>
                </div>
                <div className="ml-0 btn-primary">
                    <a href="/">
                    <img 
                        src={logo}
                        className="h-6"
                        ></img>
                    </a>
                </div>
                <div className="sm:grow max-w-sm bg-black/10 rounded-full text-center ml-auto sm:mx-auto btn-primary">
                    <SearchBar />
                </div>
                <div className="sm:ml-auto btn-primary text-tertiary">
                    <a href="/catalog">
                        <BookOpenIcon className="h-6 w-6 inline"/>
                        <p className="text-inherit hidden min-[784px]:inline">Catalog</p>
                    </a>
                </div>
                <div className="btn-primary text-tertiary">
                    <a>           
                        <ShoppingCartIcon className="h-6 w-6 inline"/>
                        <p className="text-inherit hidden min-[784px]:inline">Cart</p>    
                    </a>
                </div>
                <div className="btn-primary text-tertiary">
                    <button>
                        <UserIcon className="h-6 w-6 inline"/>
                        <p className="text-inherit hidden min-[784px]:inline">
                            {!NavbarUsername && (
                                "Account"
                            ) ||
                            NavbarUsername}
                        </p>
                    </button>
                </div>
                {!NavbarUsername && (
                    <div className="bg-secondary btn-primary text-tertiary rounded px-4 hover:bg-quinary truncate">
                        <a href="/login">
                            <p className="text-inherit inline">Log In</p>
                        </a>
                    </div>
                )}
            </div>
            {SidebarVisible && (
                <div className="z-0">
                    <Sidebar />
                </div>
            )}
        </>
    )
}

export default NavigationBar;