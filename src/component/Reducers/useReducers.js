import { init } from "../init/init";
const appReducers=(state=init, action)=>{
    switch(action.type){
        case "1":
            return {
                ...state,
                datas:action.payload
            }
    }
}

export default appReducers;