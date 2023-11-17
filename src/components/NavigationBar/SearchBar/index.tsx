import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const FilterMenu = () => {
    return (
        <div
        className="relative bottom-[-55%]" 
        id="filterMenuContainer">
            <div className="rounded-xl absolute w-[60vw] h-fit -translate-x-[50%] bg-slate-300 py-4 px-2 text-left flex flex-col gap-2">
                <h1 className="text-xl font-bold">Search Attribute</h1>
                <div className="flex bg-slate-200 rounded-xl p-4">
                    <form name="typeFilter" 
                    className="text-black grow flex flex-col">
                        <p>Type: </p>
                        <div className="flex gap-1">
                            <input
                            type="radio" id="userFilter" name="typeFilter" value={"userFilter"}></input>
                                <label 
                                htmlFor="userFilter">User</label>
                        </div>
                        <div className="flex gap-1">
                            <input  
                            type="radio" id="productFilter" name="typeFilter" value={"productFilter"}></input>
                                <label htmlFor="productFilter">Product</label>
                        </div>
                    </form>
                    <form name="sortFilter" 
                    className="text-black grow flex flex-col">
                        <p>Sort: </p>
                        <div className="flex gap-1">
                            <input
                            type="radio" id="ascendingFilter" name="sortFilter" value={"ascendingFilter"}></input>
                                <label 
                                htmlFor="ascendingFilter">Ascending</label>
                        </div>
                        <div className="flex gap-1">
                            <input  
                            type="radio" id="descendingFilter" name="sortFilter" value={"descendingFilter"}></input>
                                <label htmlFor="descendingFilter">Descending</label>
                        </div>
                    </form>
                </div>
                <button className="btn-primary ml-auto bg-secondary rounded-xl px-4" type="submit" name="typeFilter">Set</button>
            </div>
        </div>
    )
}

const SearchBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // if (location.pathname!="/catalog"){
        //     navigate("/catalog");
        // }
    const [isFilterMenuVisible, setFilterMenuVisible] = useState(false);
    function filterMenuToggle() {
        setFilterMenuVisible(!isFilterMenuVisible);
    }
    return (
        <div className="text-white gap-1 flex items-center">
            <MagnifyingGlassIcon className="text-inherit inline h-6 w-6"/>
            <input className="placeholder:italic bg-transparent placeholder:text-inherit inline grow" placeholder="Search..">
            </input>
            <div>
                <button onClick={filterMenuToggle} 
                className="btn-primary hover:bg-quinary rounded-full">
                    {!isFilterMenuVisible && (<ChevronDownIcon className="h-6 w-6 text-inherit inline"/>) || (<ChevronUpIcon className="h-6 w-6 text-inherit inline"/>) }
                </button>
                {isFilterMenuVisible && (<FilterMenu />)}
            </div>
        </div>
    )
}

export default SearchBar