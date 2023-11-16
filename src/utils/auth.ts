import { decodeToken } from "react-jwt"
import {User} from "../types/user"

function setAuthToken(token: string) {
    localStorage.setItem("token", token);
}

function getAuthData(): User {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            return decodeToken(token)!; //! to non-null, but its also checked with if statement
        } else {
            return {
                username: "",
                isAdmin: false,
            }
        }
    } catch (error) {
        return {
            username: "",
            isAdmin: false,
        }
    }
}

function logout() {
    localStorage.removeItem("token");
}

function getUsername() {
    return getAuthData().username;
}

function getIsAdmin() {
    return getAuthData().isAdmin;
}

export {
    setAuthToken,
    getAuthData,
    logout,
    getUsername,
    getIsAdmin,
}
