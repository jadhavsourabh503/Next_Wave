import { init } from "../init/init";

const appReducers=(state=init,action)=>{
        switch(action.type){
            case "USERS":
                return {
                    ...state,
                    user:action.payload
                }
        }
        return state;

}
export default appReducers;