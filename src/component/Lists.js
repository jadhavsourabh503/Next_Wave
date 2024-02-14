import React from "react"
import NumberList from "./NumberList"
import { useEffect, useState } from "react";
import axios from "axios";

const List=()=>{

    const [stats, setStats]=useState();
    const [list1, setList1]=useState();
    const [list2, setList2]=useState();
   useEffect(()=>{
    fnCall();
    alert("hello world");
    },[]);
    
         async function fnCall(){
            var response=await axios.get("https://apis.ccbp.in/list-creation/lists");
                var lit=response.data;
                setStats(lit.lists);
                console.log(stats)

             const list11 = stats.filter((item) => item.list_number === 1);
             const list21 = stats.filter(item => item.list_number === 2);
             console.log(list11)
             setList1(list11)
             setList2(list21)
             console.log(list1,"  ",list2)
         };
         var numberlist=[list1,list2];
         console.log(numberlist)
        
        
    return (
    <div className="container">
            <div className="row">
                
            {
                numberlist.map((data,id)=>{
                    return <NumberList data={data} key={id} numberlist={id}/>
                })
              }
          
            </div>
        </div>
    )
}

export default List