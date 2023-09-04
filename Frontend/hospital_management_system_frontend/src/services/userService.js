import axios from "axios";

const url = "http://localhost:8080/auth/signin";
const login_url = "http://localhost:8080/users";
const change_Password = "http://localhost:8080"

const config = {
    headers:{
      Authorization:""
    }
  };

const getTokenRequest=(data)=>{
    return axios.post(url,data);
}

const getToken=()=>{
    let t_k = localStorage.getItem("token");
    config.headers.Authorization = "Bearer "+ t_k;

    return config;
}

const getUser=(data)=>{
    return axios.post(`${login_url}/login`,data,config);
}

const getUserByEmail=(data)=>{
    return axios.put(`${login_url}/getUserByEmail`,data,config);
}

const changePassword=(data)=>{
  return axios.put(`${login_url}/changepassword`,data,config);
}

const getUserEmailById=(id)=>{
  return axios.get(`${login_url}/getUser/${id}`,config);
}

export default {getTokenRequest,getToken,getUser,changePassword,getUserByEmail,getUserEmailById};