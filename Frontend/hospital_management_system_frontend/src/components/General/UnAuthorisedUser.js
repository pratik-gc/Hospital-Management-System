import React from "react";
import '../../css/customNotFound.css';
import { useNavigate } from "react-router-dom";

const UnAuthorised = ()=>{

    const navigate = useNavigate();

    return(
        

        <div className="custom-body">
            <div class="custom-container ">
        <h2>You are not authorised to this url</h2>
        <p></p>
        <h4>Please Login to confirm your Identity</h4>
        <h1>
          401
        </h1>
        <p>we can't find the page you are looking for </p>
        <button className='btn btn-secondary' onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            navigate("/login");
        }}>Go Back and Login </button>
        </div>
        </div>
    )
}

export default UnAuthorised;