import React,{ useState,useEffect} from 'react';
import axios from '../../components/api';
export function useFetch(api,...rest){
    const [data, setData] = useState(null)
    
    useEffect(() =>{
axios
.get(api)
.then(ris => setData(ris))
.catch(arr => console.log(arr)) 
    },[...rest])
    return {data}
}