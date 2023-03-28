import {useEffect, useState} from "react";
import {API_URL, API_KEY} from '../config';
import GoodsList from "../components/GoodsList";
import {CircularProgress} from "@mui/material";

function Main () {
    const [goods, setGoods] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(r => r.json())
            .then(d => {
                if('shop' in d){
                    setGoods(d.shop);
                    setIsLoading(false)
                }
            });
    },[]);
    return (
        <main>
            {
                isLoading ? <CircularProgress color="success" /> : <GoodsList goods={goods}/>
            }
        </main>
    ) ;
}

export default Main;