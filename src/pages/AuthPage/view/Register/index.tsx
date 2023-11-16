import React from "react";
import ReactDOM from "react-dom"

const RegisterView = () => {
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
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
                required>
                </input>
                <button
                type="submit"
                className="bg-secondary text-white rounded-full min-h-fit h-8 mx-6 my-4">
                    Register
                </button>
                <p>
                    Already have an account? <strong><a href="/login">Login</a></strong>
                </p>
            </form>
        </div>
    )
}

export default RegisterView;