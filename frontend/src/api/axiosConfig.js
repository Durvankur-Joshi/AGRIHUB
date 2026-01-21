import axios from "axios";
import { Flashlight } from "lucide-react";

const api =  axios.create({
    baseURL:"http://localhost:5173/",
    withCredentials: false
});

export default api;