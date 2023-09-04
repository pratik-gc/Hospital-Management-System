import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar(props) {

    const navigate = useNavigate();

    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/login");
    }

    const sendProfile =()=>{
        if(props.role === "DOCTOR"){
            console.log("ans");
            console.log(props.sid);
            navigate(`/doctors/profile/${props.sid}`);
        }else if(props.role === "ADMIN"){

        }else if(props.role === "PATIENT"){
            
        }else if(props.role === "ACCOUNTANT"){
            
        }
        else if(props.role === "RECEPTIONIST"){
            
        }
        else{
            console.log("error in navbar");
        }
    }


    return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <a href="/" className="navbar-brand">SilverSpring Hospital</a>
            <div className="navbar-text">Welcome, {props.firstName} {props.lastName}</div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                <div className="navbar-toggler-icon"></div>
            </button>
         
                <ul className="navbar-nav">
                  
                    <li className="nav-item">
                        {/* <Link to={`/doctors/profile/${props.id}`} className="nav-link mx-5">
                        Profile</Link> */}
                        <button className="nav-link mx-5" onClick={sendProfile}>Profile</button>
                    </li>
                    <li>
                       
                        <button className="btn btn-danger" onClick={logout}>Log Out</button>
                    </li>
                </ul>
            
        </div>
    </nav>

    )
}

export default Navbar;
