// import httpClient from '../http-common';
import axios from "axios";
import userService from "./userService";

const url = "http://localhost:8080/patients";

const headers_values = userService.getToken();

const getAll = () => {
  return axios.get(url,headers_values);
};

const get = (id) => {
  return axios.get(url+`/${id}`,headers_values);
};

const getAllocatedDoctors = (id) => {
  return axios.get(url+`/doctors/${id}`,headers_values);
};

const update = (id,data) => {
  return axios.put(url+`/${id}`, data,headers_values);
};

const create = (data) => {
  return axios.post(url, data,headers_values);
};

const remove = (id) => {
  return axios.delete(url+`/${id}`,headers_values);
};

const reassign=(id) => {
  return axios.put(url+`/reassigned/${id}`,{},headers_values);
}

const getAllInactive = () => {
  return axios.get(url+`/inactive`,headers_values);
}


export default { getAll, create, get, update,reassign,getAllInactive, remove,getAllocatedDoctors };
