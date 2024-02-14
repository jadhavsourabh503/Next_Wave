import { ServerCall } from "../ServerCall"
import store from "../../store/appStore";
export const oseActions=()=>{
     ServerCall.fngetReq("https://apis.ccbp.in/list-creation/lists")
     .then((res)=>{
        let stats=res.data.lists;
const list1 = stats.filter((item) => item.list_number === 1);
    const list2 = stats.filter(item => item.list_number === 2);
    var user=[list1,list2];

 
        console.log(user);
        store.dispatch({
                type:"USERS",
            payload:user});
     })
     .catch(()=>{
        store.dispatch({
            type:"USERS",
            payload:[]
        });
     })
}