import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { Bars3Icon , ShoppingCartIcon, UserIcon, MagnifyingGlassIcon, BookOpenIcon} from '@heroicons/react/24/solid';
import logo from '../../assets/images/logo.svg';
import '../../assets/styles/Button/Button.css'

const NavigationBar = () => {
    return (
        <div className=
        "bg-quaternary flex p-3 items-center gap-2 justify-start">
            <div className="btn-primary flex items-stretch"> 
                <button >
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
            <div className="sm:grow max-w-sm bg-black/10 rounded-full text-center ml-auto sm:mx-auto btn-primary hover:bg-black/20">
                <div className="text-white gap-1 flex">
                    <MagnifyingGlassIcon className="text-inherit inline h-6 w-6"/>
                    <input className="placeholder:italic bg-transparent placeholder:text-inherit text-inherit inline" placeholder="Search..">
                    </input>
                </div>
            </div>
            <div className="sm:ml-auto btn-primary text-tertiary">
                <button>
                    <BookOpenIcon className="h-6 w-6 inline"/>
                    <p className="text-inherit hidden sm:inline">Catalog</p>
                </button>
            </div>
            <div className="btn-primary text-tertiary">
                <button>           
                    <ShoppingCartIcon className="h-6 w-6 inline"/>
                    <p className="text-inherit hidden sm:inline">Cart</p>    
                </button>
            </div>
            <div className="btn-primary text-tertiary">
                <button>
                    <UserIcon className="h-6 w-6 inline"/>
                    <p className="text-inherit hidden sm:inline">Account</p>
                </button>
            </div>
        </div>
    )
}

export default NavigationBar;