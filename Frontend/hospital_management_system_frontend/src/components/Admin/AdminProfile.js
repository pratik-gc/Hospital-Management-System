import React, { useEffect, useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import userService from "../../services/userService";
import female_admin from "../../images/avtars/user_female.jpg";
import male_admin from "../../images/avtars/admin_man.jpg";
import "../../css/customProfile.css";
import { Badge } from "react-bootstrap";


const AdminProfile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  // const [pass, setPass] = useState(
  //   {
  //       email: "",
  //       password: ""
  //   }
  // )
    


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
    

      <div className="mainDiv">
        {/* Card----------------------- */}
        <div className="cardHolder" style={{width:"65%"}}>
          {/* Profile section ----------------- */}
          <div
            className="card-containerDiv-Profile shadow row"
            
          >
            {/* profile 3 columns ------------- */}
            <div className="profileDivC1 col-xs-3 col-lg-3">
              {/* <button className=" btn btn-primary">
                
                 {profile.role}{" "}
              </button> */}
              <h4>
              <Badge pill bg="warning" text="dark">
              {profile.role}
              </Badge>
              </h4>
            </div>
            <div className="profileDivC2 col-xs-6 col-lg-6">
              {/* <img src={profilePic} className="profilePic" alt="avtar" /> */}
              {profile.gender==="MALE"?
              <img src={male_admin} className="profilePic" alt="avtar" />:
              <img src={female_admin} className="profilePic" alt="avtar" />
            }
            </div>
            <div className="profileDivC3 col-xs-3 col-lg-3">
              {/* <button className=" btn btn-success">
                {profile.status}
              </button> */}
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
              {/* left list container -------- */}
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
              {/* left list container -------- */}
              <div className="listDivRight container col-md-6 col-xs-12">

              <div className="row my-3 " style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                     User Id:
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
                    HiringDate :
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


                {/* <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Charges :
                  </div>
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {profile.charges}
                  </div>
                </div> */}
                
        
              </div>
            <div className="form-group col-md-6 mt-2">
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
            {/* <div className="skills">
                            <ul >
                                <div className='listDiv '>
                                    <li>charges:1000 {profile.charges}</li>
                                    <li>Email : sbdshjbdhvdbdsnbdj {profile.email}</li>

                                </div>
                                <hr className="listDivHr" />
                                <div className='listDiv '>
                                    <li>contactNo : {profile.contactNo}</li>
                                    <li>salary : {profile.salary} </li>

                                </div>
                                <hr className="listDivHr" />
                                <div className='listDiv'>
                                    <li>dob : {profile.dob}</li>
                                    <li>hiringDate : {profile.hiringDate}</li>

                                </div>
                                <hr className="listDivHr" />
                                <div className='listDiv'>
                                    <li>doctorId : {profile.doctorId}</li>
                                    <li>gender : {profile.gender}</li>

                                </div>
                                <hr className="listDivHr" />


                            </ul>
                        </div> */}
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default AdminProfile;
