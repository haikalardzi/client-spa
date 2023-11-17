import React, { useState } from "react";
import { axiosInstance } from "../../../../utils/axios"
import {setAuthToken } from "../../../../utils/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
    const navigate = useNavigate();
    const [registerCredentials, setRegisterCredentialsHook] = useState({
        email : '',
        username: '',
        password: '',
      });
    function setRegisterEmail(email:string) {
        setRegisterCredentialsHook(registerCredentials => ({...registerCredentials, email: email}));
        console.log(email);
    }
    function setRegisterUsername(username:string) {
        setRegisterCredentialsHook(registerCredentials => ({...registerCredentials, username: username}))
        console.log(username);
    }
    function setRegisterPassword(password:string) {
        setRegisterCredentialsHook(registerCredentials => ({...registerCredentials, password: password}))
        console.log(password);
    }
    const handleRegister = async (e:any) => {
        e.preventDefault()
        try {
            const response = await axiosInstance.post("register", {
                username: registerCredentials["username"],
                email: registerCredentials["email"],
                password: registerCredentials["password"],
            });
            console.log(response.data);
            const data = response.data;
            if (response.status === 200) {
                if (!data.data){
                    toast.success('Register Success!');
                    // success
                    setAuthToken(data.token);
                    
                    // do something regarding user statuses
                    // bring back to main menu
                    navigate("/");
                }
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
            <form
            onSubmit={handleRegister} 
            className="text-black flex flex-col px-12 gap-4">
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
                >
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