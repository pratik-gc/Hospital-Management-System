import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import doctorService from "../../services/doctorService";
import doc_male from "../../images/avtars/img_doc_01.jpg";
import doc_female from "../../images/avtars/female_doc1.jpg";
// import profilePic from "../../images/adminDark.jpg"
// import profilePic from "../../images/accountantLight.jpg"
// import profilePic from "../../images/maleDoc.jpg"
import "../../css/customProfile.css";
import { Badge } from "react-bootstrap";

const DoctorProfile = () => {
  const [profile, setProfile] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    console.log("ans2");
    doctorService
      .getDoctorInfo(id)
      .then((resp) => {
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
        <div className="cardHolder" style={{ width: "65%" }}>
          {/* Profile section ----------------- */}
          <div className="card-containerDiv-Profile shadow row">
            {/* profile 3 columns ------------- */}
            <div className=" col-xs-3 col-lg-3">
              {/* <button className=" btn btn-primary"> </button> */}
              <h4>
              <Badge pill bg="warning" text="dark">
              {profile.role}
              </Badge>
              </h4>
            </div>
            <div className=" col-xs-6 col-lg-6">
              {
                profile.gender==="MALE"?
                <img src={doc_male} className="profilePic" alt="avtar" />:
                <img src={doc_female} className="profilePic" alt="avtar" />
              }

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
              {/* left list container -------- */}
              <div className="listDivLeft container  col-md-6 col-xs-12">
                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Email :</div>
                  <div
                    id="inputShowEmail-profile"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {profile.email}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Contact No :
                  </div>
                  <div
                    id="contact-no-tag"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {profile.contactNo}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Date Of Birth :
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {profile.dob}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Salary :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {profile.salary}
                  </div>
                </div>
              </div>
              {/* left list container -------- */}
              <div className="listDivRight container col-md-6 col-xs-12">
                <div className="row my-3 " style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Doctor Id:</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {profile.doctorId}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Gender :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {profile.gender}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
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
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Charges :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {profile.charges}
                  </div>
                </div>
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

export default DoctorProfile;
