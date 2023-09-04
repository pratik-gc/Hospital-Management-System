import axios from "axios";
import userService from "./userService";


const url = "http://localhost:8080/employees";

const headers_values = userService.getToken();

const getAll=()=>{
    return axios.get(url,headers_values);
}

const get = (id) => {
    return axios.get(url+`/${id}`,headers_values);
};

const create = (data) => {
    return axios.post(url, data,headers_values);
  };

const update = (id,data) => {
    return axios.put(url+`/${id}`, data,headers_values);
  };

const remove=(id)=>{
    return axios.delete(url+`/${id}`,headers_values);
}
const reassign=(id) => {
  return axios.put(url+`/reassign/${id}`,{},headers_values);
}

const getAllInactive = () => {
  return axios.get(url+`/inactive`,headers_values);
}

export default {getAll,remove,get,create,update,reassign,getAllInactive};