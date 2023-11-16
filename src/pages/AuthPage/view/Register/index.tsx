import React, { useState } from "react";
import ReactDOM from "react-dom"
import axiosInstance from "axios"
import { getAuthData, setAuthToken } from "../../../../utils/auth";
import { User } from "../../../../types/user";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
    const navigate = useNavigate();
    const [loading, setIsLoading] = useState(false);
    const [registerCredentials, setRegisterCredentialsHook] = useState({
        email : '',
        username: '',
        password: '',
      });
    function setRegisterCredentials(email?: any, username?: any, password?: any) {
        setRegisterCredentialsHook(registerCredentials => ({...registerCredentials, email: email ? email : registerCredentials["email"], username: username ? username : registerCredentials["username"], password: password ? password : registerCredentials["password"]}))
    }
    function setRegisterEmail(email:any) {
        setRegisterCredentialsHook(registerCredentials => ({...registerCredentials, email: email}))
    }
    function setRegisterUsername(username:any) {
        setRegisterCredentialsHook(registerCredentials => ({...registerCredentials, username: username}))
    }
    function setRegisterPassword(password:any) {
        setRegisterCredentialsHook(registerCredentials => ({...registerCredentials, password: password}))
    }
    const handleRegister = async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.post("/services/register", {
                email: registerCredentials["email"],
                username: registerCredentials["username"],
                password: registerCredentials["password"],
            });
            if (response.status === 200) {
                toast.success('Register Success!');
                // success
                setAuthToken(response.data.token);
                const user: User = getAuthData();
                setIsLoading(false);
                // do something regarding user statuses
                // bring back to main menu
                navigate("/");
            } else {
                // not success
                toast.error('Sorry, register failed')
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="rounded ring-quaternary ring-1 shadow-2xl bg-white w-fit pb-4">
            <h1
            className="px-4 py-6 text-3xl font-bold">
                Register
            </h1>
            <form className="text-black flex flex-col px-12 gap-4">
                <label 
                htmlFor="email"
                className="font-bold">
                    Email
                </label>
                <input 
                type="text" 
                id="email"
                className="ring-1 ring-black p-1 rounded invalid:ring-red-600 invalid:ring-2"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={registerCredentials["email"]}
                onChange={(e) => setRegisterEmail(e.target.value)}>
                </input>
                <label 
                htmlFor="username"
                className="font-bold">
                    Username
                </label>
                <input 
                type="text" 
                id="username"
                className="ring-1 ring-black p-1 rounded"
                value={registerCredentials["username"]}
                onChange={(e) => setRegisterUsername(e.target.value)}
                required>
                </input>
                <label 
                htmlFor="password"
                className="font-bold">
                    Password
                </label>
                <input 
                type="password" 
                id="password"
                className="ring-1 ring-black p-1 rounded"
                value={registerCredentials["password"]}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required>
                </input>
                <button
                type="submit"
                className="bg-secondary text-white rounded-full min-h-fit h-8 mx-6 my-4"
                onClick={handleRegister}>
                    Register
                </button>
                <p>
                    Already have an account? <strong><a href="/login">Login</a></strong>
                </p>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default RegisterView;