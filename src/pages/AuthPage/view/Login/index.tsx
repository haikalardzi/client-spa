import React, { useState } from "react";
import ReactDOM from "react-dom/client"
const LoginView = () => {
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
                required>
                </input>
                <button
                type="submit"
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