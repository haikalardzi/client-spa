import axios from "axios";

const REST_API = "http://localhost:8088/api/";

const axiosInstance = axios.create({
    baseURL: REST_API,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
    },
});

const axiosConfig = () => {return {
    baseURL: REST_API,
    headers: {
        Authorization:  `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
    },
}};

export { axiosInstance, axiosConfig };