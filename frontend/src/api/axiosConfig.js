import axios from "axios";
import { Flashlight } from "lucide-react";

const api =  axios.create({
    baseURL:"http://localhost:3000/api",
    withCredentials: false
});

export default api;