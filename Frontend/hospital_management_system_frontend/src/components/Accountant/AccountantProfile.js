import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../services/userService";
// import userService from "../../services/userService";
import profilePic from "../../images/user_icon.png";
import { Badge } from "react-bootstrap";

const AccountantProfile = () => {
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

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (

    <div>
      <div className="mainDiv">
        {/* Card----------------------- */}
        <div className="cardHolder" style={{width:"65%"}}>
          {/* Profile section ----------------- */}
          <div
            className="card-containerDiv-Profile shadow row"
            
          >
            {/* profile 3 columns ------------- */}
            {/* <div className="profileDivC1 col-xs-3 col-lg-3">
              <button className=" btn btn-primary">
                
                 {profile.role}{" "}
              </button>
            </div>
            <div className="profileDivC2 col-xs-6 col-lg-6">
              <img src={profilePic} className="profilePic" alt="avtar" />
            </div>
            <div className="profileDivC3 col-xs-3 col-lg-3">
              <button className=" btn btn-success">
                {profile.status}
              </button>
              
            </div> */}

<div className=" col-xs-3 col-lg-3">
              {/* <button className=" btn btn-primary"> </button> */}
              <h4>
              <Badge pill bg="warning" text="dark">
              {profile.role}
              </Badge>
              </h4>
            </div>
            <div className=" col-xs-6 col-lg-6">
              <img src={profilePic} className="profilePic" alt="avtar" />
            </div>
            <div className=" col-xs-3 col-lg-3">
              {/* <button className=" btn btn-success"></button> */}
              <h4>
              <Badge pill bg={profile.status==="ACTIVE"?"success":"danger"} text="white">
              {profile.status}
              </Badge>
              </h4>
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

              {/* left list container started -------- */}
              <div className="listDivLeft container  col-md-6 col-xs-12">


              <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Email :
                  </div>
                  <div
                    id="inputShowEmail-profile"
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
                    id="contact-no-tag"
                    
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
                    id="inputPassword"
                    
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
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.salary}
                  </div>
                </div> */}


              </div>
              {/* left list container ended -------- */}
              {/* right list container started */}
              <div className="listDivRight container col-md-6 col-xs-12">

              <div className="row my-3 " style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                     Accountant Id:
                  </div>
                  <div
                    id="inputPassword"
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
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.gender}
                  </div>
                </div>
                

                {/* <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Hiring Date :
                  </div>
                  <div
                    id="inputPassword"
                    type="password"
                    required=""
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.hiringDate}
                  </div>
                </div> */}

                



  
                
        
              </div>
              <div className="buttonDiv row my-3 ">
                  <div className="form-group col-md-4 mt-2"></div>

                <div className="form-group col-md-4 mt-2">
                      <button
                        id="admin-addDoctor-backButton-box"
                        className="btn btn-secondary border border-primary btn-md"
                        onClick={() => {
                          navigate(-1);
                        }}
                      >
                        Go Back
                      </button>
                    </div>

                    <div className="form-group col-md-4 mt-2"></div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>



    // <div>
      
    //   <br />
    //   {profile.contactNo}
    //   <br />
    //   <br />
    //   dob: {profile.dob}
    //   <br />
      
    //   <br />
    //   {profile.email}
    //   <br />
    //   <br />
    //   {profile.firstName}
    //   <br />
    //   <br />
    //   {profile.gender}
    //   <br />
    //   <br />
      // {/* hiring date : {profile.hiringDate} */}
    //   <br />
    //   <br />
    //   {profile.lastName}
    //   <br />
    //   <br />
    //   {profile.role}
    //   <br />
    //   <br />
    //   {profile.userId}
    //   <br />
    //   <br />
    //   {profile.status}
      
    // </div>
  );
};

export default AccountantProfile;
