import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../../services/employeeService";
import admin_male from "../../images/avtars/admin_man.jpg";
import admin_female from "../../images/avtars/user_female.jpg";
import account_male from "../../images/avtars/user_male2.jpg";
import account_female from "../../images/avtars/account_female.jpg";
import doc_male from "../../images/avtars/img_doc_01.jpg";
import doc_female from "../../images/avtars/female_doc1.jpg";
import recep_male from "../../images/avtars/recep_male.jpg";
import recep_female from "../../images/avtars/recep_female.jpg";
import "../../css/customProfile.css";
import { Badge } from "react-bootstrap";

const EmployeeInfo = () => {
  const [employeeDetails, setEmployeeDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployeeDetail(id);
  }, []);

  function getEmployeeDetail(employeeId) {
    employeeService
      .get(employeeId)
      .then((resp) => {
        setEmployeeDetails(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });
  }

  function showProfileAvatar(u_role,a_gender){
    if(u_role === "ADMIN" && a_gender === "MALE"){
      return <img src={admin_male} className="profilePic" alt="avtar" />
    }
    else if(u_role === "ADMIN" && a_gender === "FEMALE"){
      return <img src={admin_female} className="profilePic" alt="avtar" />
    }
    else if(u_role === "DOCTOR" && a_gender === "MALE"){
      return <img src={doc_male} className="profilePic" alt="avtar" />
    }
    else if(u_role === "DOCTOR" && a_gender === "FEMALE"){
      return <img src={doc_female} className="profilePic" alt="avtar" />
    }
    else if(u_role === "ACCOUNTANT" && a_gender === "MALE"){
      return <img src={account_male} className="profilePic" alt="avtar" />
    }
    else if(u_role === "ACCOUNTANT" && a_gender === "FEMALE"){
      return <img src={account_female} className="profilePic" alt="avtar" />
    }
    else if(u_role === "RECEPTIONIST" && a_gender === "MALE"){
      return <img src={recep_male} className="profilePic" alt="avtar" />
    }
    else if(u_role === "RECEPTIONIST" && a_gender === "FEMALE"){
      return <img src={recep_female} className="profilePic" alt="avtar" />
    }
  }

  return (
    <div>
      <div className="mainDiv">
        {/* Card----------------------- */}
        <div className="cardHolder" style={{ width: "65%" }}>
          {/* Profile section ----------------- */}
          <div className="card-containerDiv-Profile shadow row">
            {/* profile 3 columns ------------- */}
            <div className="profileDivC1 col-xs-3 col-lg-3">
              <h4>
                <Badge pill bg="warning" text="dark">
                  {employeeDetails.role}
                </Badge>
              </h4>
            </div>
            <div className="profileDivC2 col-xs-6 col-lg-6">
              {/* <img src={profilePic} className="profilePic" alt="avtar" /> */}
              {showProfileAvatar(employeeDetails.role,employeeDetails.gender)}
            </div>
            <div className="profileDivC3 col-xs-3 col-lg-3">
              <h4>
                <Badge
                  pill
                  bg={
                    employeeDetails.status === "ACTIVE" ? "success" : "danger"
                  }
                  text="white"
                >
                  {employeeDetails.status}
                </Badge>
              </h4>
            </div>
            <div className="container">
              <h3 className="cardProfileName">
                {employeeDetails.firstName} {employeeDetails.lastName}
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
                    {employeeDetails.email}
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
                    {employeeDetails.contactNo}
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
                    {employeeDetails.dob}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Salary :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {employeeDetails.salary}
                  </div>
                </div>
              </div>
              {/* left list container -------- */}
              <div className="listDivRight container col-md-6 col-xs-12">
                <div className="row my-3 " style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Employee Id:
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {employeeDetails.empId}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Gender :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {employeeDetails.gender}
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
                    {employeeDetails.hiringDate}
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

export default EmployeeInfo;
