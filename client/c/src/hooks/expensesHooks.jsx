

import { useState, useEffect, useRef } from "react";
import axios from "axios";

export function useFetch(url,method){
    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);

    async function getData() {

        setLoading(true);
        const response = await axios({
            url: url,
            method: method,
            withCredentials:true
        });
        const finalData = response.data; // it will have raw array of objects
        console.log(finalData);
        setData(finalData);
        setLoading(false);
    }
    useEffect(()=>{
        getData();
    },[url]);

return {data, loading};
}


