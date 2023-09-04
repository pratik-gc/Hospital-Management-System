import React, { useEffect } from "react";
import {  useNavigate} from "react-router-dom";


function Protected(props){
    const {Component} = props;
    
    const navigate = useNavigate();

    useEffect(()=>{
        let loginRole = localStorage.getItem("role");
        console.log(props.Role1);
        if(loginRole !== props.Role1){
            navigate("/unauthorised");
        }
    },[])



    return(
        <div>
            <Component />
        </div>
    )
}

export default Protected;