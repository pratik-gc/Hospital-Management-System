import axios from "axios";
import userService from "./userService";

const url = "http://localhost:8080/wards";

const getAll = () => {
  return axios.get(url,userService.getToken());
};

const getById = (id) => {
  return axios.get(url+`/${id}`,userService.getToken());
};


export default {getAll,getById};