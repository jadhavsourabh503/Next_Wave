import { useEffect } from "react";
import Cards from "./Cards";
import './CSS/Number.css'


const NumberList=(props)=>{
    useEffect(()=>{
        alert("hello worls?");
    },[])
    const {data,numberlist}=props;
    console.log(props)
    return (
        <div className="col-md-4"  style={{ height: '547px', overflow: 'auto' }}>
         <div> <h5>List ({1+numberlist})</h5> <input type="checkbox"/></div>  
            {
                data.map((itms,id)=>{
                    return <Cards data={itms} key={id} />
                })
            }
           
        </div>
    )
}

export default NumberList;