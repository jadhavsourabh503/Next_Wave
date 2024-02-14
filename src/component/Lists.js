import React from "react"
import NumberList from "./NumberList"
import { useEffect, useState } from "react";
import axios from "axios";

const List=()=>{
    const [stats, setStats]=useState();
    useEffect( ()=>{
        fnCall();

    }
      , []);
    
   async function fnCall(){
    console.log("hello")
            var res=await axios.get("https://apis.ccbp.in/list-creation/lists");
           var lit=res.data;
           console.log(lit)
           setStats(lit.lists);
        }
        console.log(stats)
    return (
    <div className="container">
            <div className="row">
            {
            stats.map((data, id)=>{
               return (<>
                        {data.list_number===1? <NumberList key="id" data={data}/>:<NumberList key="id" data={data}/> };
                    </>);
    })
            }
          
            </div>
        </div>
    )
}

export default List