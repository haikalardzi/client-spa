import { ArchiveBoxIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getUsername, logout } from "../../../utils/auth";

const Sidebar = () => {
    const [LogOutBtnVisible, setLogOutBtnVisible] = useState(false);
    useEffect(() => {
        const fetchData = () => {
            const username = getUsername();
            setLogOutBtnVisible(username?true:false);
        };
        fetchData();
    }, []);
    function LogOutSidebarHandle() {
        logout();
        window.location.reload();
    }

    return (
        <>
            <div className="fixed h-full w-fit min-w-[200px] bg-red-100 pt-16 flex flex-col">
                <div className="p-4">
                    <button className="text-black btn-primary">
                        <div>
                            <ArchiveBoxIcon className="w-6 aspect-square inline" />
                            <p className="inline">History</p>    
                        </div>    
                    </button>
                </div>
                {LogOutBtnVisible && (
                    <div className="mt-auto p-4">
                        <button className="text-black btn-primary" onClick={LogOutSidebarHandle}>
                            <div>
                                <ArrowLeftOnRectangleIcon className="w-6 aspect-square inline" />
                                <p className="inline">Logout</p>    
                            </div>    
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Sidebar;