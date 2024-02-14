import { ServerCall } from "../ServerCall"
import store from "../../store/appStore";
export const oseActions=()=>{
     ServerCall.fngetReq("https://apis.ccbp.in/list-creation/lists")
     .then((res)=>{
        console.log(res);
        store.dispatch({
                type:"USERS",
            payload:res.data});
     })
     .catch(()=>{
        store.dispatch({
            type:"USERS",
            payload:[]
        });
     })
}