
// import httpClient from '../http-common';
import axios from "axios";
import userService from "./userService";

const url = "http://localhost:8080/doctors";
const url2 = "http://localhost:8080/patients/patient"

const headers_values = userService.getToken();

const getAll = () => {
  return axios.get(url,headers_values);
};

const create = (data) => {
  console.log("create data",headers_values);
  return axios.post(url, data,headers_values);
};

const getAllPatients =(id) =>{
  return axios.get(url+`/patients/${id}`,headers_values);
 }

 const getDoctorInfo =(id) =>{
  return axios.get(url+`/${id}`,headers_values);
 }
 
 const addDoctor =(patient_id,doctor_id)=>{
  console.log("akjsf");
   return axios.put(url2+`/${patient_id}/doctor/${doctor_id}`,{},headers_values);
 }

 
export default { getAll, create,getAllPatients,addDoctor,getDoctorInfo};
