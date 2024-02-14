import React from "react"
import NumberList from "./NumberList"
import { useEffect } from "react";
import { oseActions } from "./actions/loadApi";
import {  useSelector } from "react-redux";

const List=()=>{
    useEffect(()=>{
            alert("hello world");
            fnCall();
        },[]);
    const loadData=useSelector(state=>state.user)
    
    const stats=loadData.lists;
    console.log(stats);
    const list1 = stats.filter((item) => item.list_number === 1);
    const list2 = stats.filter(item => item.list_number === 2);
    var numberlist=[list1,list2];

 
    
          function fnCall(){
            oseActions();
           
         };
        
        
        
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