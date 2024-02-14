import { init } from "../init/init";
function appReducers(state=init, action){
    switch(action.type){
        case "CREATE_LIST":
            return {
                ...state,
                creatList:action.payload

            }
    }
}
export default appReducers;