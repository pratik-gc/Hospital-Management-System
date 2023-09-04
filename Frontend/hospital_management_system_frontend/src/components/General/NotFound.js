import { useNavigate } from 'react-router-dom';
import '../../css/customNotFound.css';
import React from 'react';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="custom-body">
            <div class="custom-container ">
        <h2>Oops! Page not found</h2>
        <h1>
          404
        </h1>
        <p>we can't find the page you are looking for </p>
        <button className='btn btn-secondary' onClick={()=>{
            navigate(-1);
        }}> Go Back </button>
        </div>
        </div>
    )
}

export default NotFound;