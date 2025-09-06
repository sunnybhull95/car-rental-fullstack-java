import axios from "axios";



const getApi = (endpoint) =>{

    const baseUrl = import.meta.env.VITE_APP_API_BASE || "http://localhost:8080";

    return(
        axios.get(`${baseUrl}${endpoint}`)
        
    );


};


export default getApi;




