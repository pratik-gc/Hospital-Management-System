import axios from "axios";
import userService from "./userService";


const url = "http://localhost:8080/patients";

const get = (id) => {
    return axios.get(url+`/${id}`,userService.getToken());
  };


  export default {get};