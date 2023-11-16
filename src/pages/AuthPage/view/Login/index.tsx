import React, { useState } from "react";
// import ReactDOM from "react-dom/client"
import { axiosInstance } from "../../../../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthToken } from "../../../../utils/auth";
// import { User } from "../../../../types/user";
const LoginView = () => {
    const navigate = useNavigate();
    // const [loading, setIsLoading] = useState(false);
    const [loginCredentials, setLoginCredentialsHook] = useState({
        username: '',
        password: '',
      });
    // function setLoginCredentials(username?: any, password?: any) {
    //     setLoginCredentialsHook(loginCredentials => ({...loginCredentials, username: username ? username : loginCredentials["username"], password: password ? password : loginCredentials["password"]}))
    // }
    function setLoginUsername(username: any) {
        setLoginCredentialsHook(loginCredentials => ({...loginCredentials, username:username}))
    }
    function setLoginPassword(password: any) {
        setLoginCredentialsHook(loginCredentials => ({...loginCredentials, password:password}))
    }
    const handleLogin = async () => {
        // setIsLoading(true);
        try {
            const response = await axiosInstance.post("login", {
                username: loginCredentials["username"],
                password: loginCredentials["password"],
            });
            console.log(response.config.baseURL?.toString());
            const data = JSON.parse(response.data);
            if (response.status === 200) {
                toast.success('Login Success!');
                // success
                setAuthToken(data.token);
                // const user: User = getAuthData();
                // setIsLoading(false);
                // do something regarding user statuses
                // bring back to main menu
                navigate("/");
            } else {
                // not success
                toast.error('Sorry, login failed')
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className="rounded ring-quaternary ring-1 shadow-2xl bg-white w-fit pb-4">
            <h1
            className="px-4 py-6 text-3xl font-bold">
                Login
            </h1>
            <form className="text-black flex flex-col px-12 gap-2">
                <label 
                htmlFor="username"
                className="font-bold">
                    Username
                </label>
                <input 
                type="text" 
                id="username"
                className="ring-1 ring-black p-1 rounded"
                value={loginCredentials["username"]}
                onChange={(e) => setLoginUsername(e.target.value)}
                required>
                </input>
                <label 
                htmlFor="password"
                className="font-bold mt-4">
                    Password
                </label>
                <input 
                type="password" 
                id="password"
                className="ring-1 ring-black p-1 rounded"
                value={loginCredentials["password"]}
                onChange={(e) => setLoginPassword(e.target.value)}
                required>
                </input>
                <button
                type="submit"
                onClick={handleLogin}
                className="bg-secondary text-white rounded-full min-h-fit h-8 mx-6 my-4">
                    Log In
                </button>
                <p>
                    Don't have an account? <strong><a href="/register">Register</a></strong></p>
            </form>
        </div>
    )
}

export default LoginView