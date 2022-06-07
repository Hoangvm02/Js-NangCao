import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    baseURL: "https://629345787aa3e6af1a08bc3c.mockapi.io/"
})
export default instance