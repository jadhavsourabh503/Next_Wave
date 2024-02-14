import axios from "axios";
export class ServerCall{
    static fngetReq(url){
        return axios.get(url);
    }
}