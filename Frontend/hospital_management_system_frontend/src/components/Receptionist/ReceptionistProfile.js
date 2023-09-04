import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../services/userService";
import recep_man from "../../images/avtars/recep_male.jpg"
import recep_female from "../../images/avtars/recep_female.jpg"
import "../../css/customProfile.css";


const ReceptionistProfile = () => {
  const [profile, setProfile] = useState({});
  
    

  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    console.log("ans2");
    userService
      .getUserEmailById(id)
      .then((resp) => {
          console.log("resp.data");
        setProfile(resp.data);
        console.log(resp.data);
      //  setPass({...pass,email:resp.data.email});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      {/* <button onClick={changePassword}> Change Password</button> */}
      
      

      {/* ---------------------------------------------- */}

      
      <div className="mainDiv">
        {/* Card----------------------- */}
        <div className="cardHolder" style={{width:"65%"}}>
          {/* Profile section ----------------- */}
          <div
            className="card-containerDiv-Profile shadow row"
            
          >
            {/* profile 3 columns ------------- */}
            <div className="profileDivC1 col-xs-3 col-lg-3">
              <button className=" btn btn-primary">
                
                 {profile.role}{" "}
              </button>
            </div>
            <div className="profileDivC2 col-xs-6 col-lg-6">
            {profile.gender==="MALE"?
            <img src={recep_man} className="profilePic" alt="avtar" />:
            <img src={recep_female} className="profilePic" alt="avtar" />
            
          }
            </div>
            <div className="profileDivC3 col-xs-3 col-lg-3">
              <button className=" btn btn-success">
                {profile.status}
              </button>
              
            </div>
            <div className="container">
              <h3 className="cardProfileName">
                {profile.firstName} {profile.lastName}
              </h3>
            </div>
          </div>

          <div className="card-containerDiv shadow row">
            {/* <h3 className="cardProfileName">
              {profile.firstName} {profile.lastName}
            </h3> */}
            {/* <h3 className="status">status:{profile.status}</h3> */}

            {/* listDivContainer--------------- */}
            <div className="listDivContainer row">
              {/* left list container -------- */}
              <div className="listDivLeft container  col-md-6 col-xs-12">


              <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Email :
                  </div>
                  <div
                    id="Show-email-profile"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.email}
                  </div>
                </div>

                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Contact No :
                  </div>
                  <div
                    id="Show-contactNo-profile"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.contactNo}
                  </div>
                </div>

                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Date Of Birth :
                  </div>
                  <div
                    id="Show-dob-profile"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.dob}
                  </div>
                </div>
                
                
                {/* <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Salary :
                  </div>
                  <div
                    id="Show-salary-profile"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.salary}
                  </div>
                </div> */}


              </div>
              {/* left list container -------- */}
              <div className="listDivRight container col-md-6 col-xs-12">

              <div className="row my-3 " style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                     User Id:
                  </div>
                  <div
                    id="Show-userId-profile"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.userId}
                  </div>
                </div>

                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Gender :
                  </div>
                  <div
                    id="Show-gender-profile"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.gender}
                  </div>
                </div>
                
              {/* -------------------------- You have commented Hiring Date for Receptionist -------------------------- */}
                {/* <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    HiringDate :
                  </div>
                  <div
                    id="Show-hiringDate-profile"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.hiringDate}
                  </div>
                </div> */}


                {/* <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Charges :
                  </div>
                  <div
                    id="Show-charges-profile"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.charges}
                  </div>
                </div> */}
                
        
              </div>
      <div className="form-group col-md-6 mt-3">
                  <button
                    id="admin-addDoctor-backButton-box"
                    className="btn btn-secondary  custom-spacing custom-spacing-button"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Go Back
                  </button>
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
      
   
  );
};

export default ReceptionistProfile;

