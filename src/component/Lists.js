import React from "react"
import NumberList from "./NumberList"
import { useEffect } from "react";
import { oseActions } from "./actions/loadApi";
import {  useSelector } from "react-redux";

const List=()=>{
    useEffect(()=>{
            fnCall();
        },[]);
    const loadData=useSelector(state=>state.user)
    
    console.log(loadData);
    
    
          function fnCall(){
            oseActions();
           
         };
        
        
        
    return (
    <div className="container">
            <div className="row">
                
            {
                loadData.map((data,id)=>{
                    return <NumberList data={data} key={id} numberlist={id}/>
                })
              }
          
            </div>
        </div>
    )
}

export default List