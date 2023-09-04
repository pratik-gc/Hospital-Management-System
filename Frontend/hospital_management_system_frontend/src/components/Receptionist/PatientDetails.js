import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import patientService from "../../services/patient.service";
import { Badge } from "react-bootstrap";
import pat_male from "../../images/avtars/user_man.jpg";
import pat_female from "../../images/avtars/user_female2.jpg";


const PatientDetails = () => {
  const [patientDetails, setPatientDetails] = useState({});
  const [doctorsAllocated, setDoctorsAllocated] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getPatientDetail(id);
    getDoctorsList(id);
  }, []);

  function getDoctorsList(patientId) {
    patientService
      .getAllocatedDoctors(patientId)
      .then((resp) => {
        console.log(resp.data);
        setDoctorsAllocated(resp.data);
      })
      .catch((err) => {
        console.log("some error ocurred in patient details");
      });
  }

  function getPatientDetail(patientId) {
    patientService
      .get(patientId)
      .then((resp) => {
        setPatientDetails(resp.data);
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });
  }

  return (
    // <div>
    //   <table>
    //     <tbody>
    //       <tr>
    //         <td>id</td>
    //         <td>{patientDetails.patientId} </td>
    //       </tr>
    //       <tr>
    //         <td>firstName</td>
    //         <td>{patientDetails.firstName}</td>
    //       </tr>
    //       <tr>
    //         <td>lastName</td>
    //         <td>{patientDetails.lastName}</td>
    //       </tr>
    //       <tr>
    //         <td>Ward Number</td>
    //         <td>{patientDetails.wardId} </td>
    //       </tr>
    //       <tr>
    //         <td>email</td>
    //         <td>{patientDetails.email} </td>
    //       </tr>
    //       <tr>
    //         <td>Contact No.</td>
    //         <td>{patientDetails.contactNo} </td>
    //       </tr>
    //       <tr>
    //         <td>BloodGr</td>
    //         <td>{patientDetails.bloodGroup} </td>
    //       </tr>
    //       <tr>
    //         <td>Date_Of_Admission</td>
    //         <td>{patientDetails.dateOfAdmission} </td>
    //       </tr>
    //       <tr>
    //         <td>DOB</td>
    //         <td>{patientDetails.dob}</td>
    //       </tr>

    //       <tr>
    //         <td>payStatus</td>
    //         <td>{patientDetails.paymentStatus}</td>
    //       </tr>
    //       <tr>
    //         <td>ward_id</td>
    //         <td>{patientDetails.wardId}</td>
    //       </tr>
    //       <tr>
    //         <td>disease</td>
    //         <td>{patientDetails.disease}</td>
    //       </tr>
    //       <tr>
    //         <td>Doctors Allocated</td>
    //         {doctorsAllocated.map((i) => (
    //           <td key={i.doctorId}>{i.firstName}</td>
    //         ))}
    //       </tr>
    //       {/* <tr>
    //       <td>disease</td>
    //       {patientDetails.patientProblems?.map((i)=>(<td>{i.disease}</td>))}
    //     </tr> */}
    //     </tbody>
    //   </table>
    // </div>
    //-----------------------------------------------------------------------------------------------------------------------------//
    <div>
      <div className="mainDiv">
        {/* Card----------------------- */}
        <div className="cardHolder my-5" style={{ width: "75%" }}>
          {/* Profile section ----------------- */}
          <div>
          
          <div className="card-containerDiv-Profile shadow row">
              {/* profile 3 columns ------------- */}
              <div className=" col-xs-3 col-lg-3">
                {/* <button className=" btn btn-primary"> </button> */}
                <h4>
                  <Badge pill bg="warning" text="dark">
                    {patientDetails.role}
                    
                  </Badge>
                </h4>
              </div>
              <div className=" col-xs-6 col-lg-6">
                {patientDetails.gender==="MALE"?
                <img src={pat_male} className="profilePic" alt="avtar" />:
                <img src={pat_female} className="profilePic" alt="avtar" />
              }
              </div>
              <div className=" col-xs-3 col-lg-3">
                {/* <button className=" btn btn-success"></button> */}
                <h4>
                  <Badge
                    pill
                    bg={patientDetails.status === "ACTIVE" ? "success" : "danger"}
                    text="white"
                  >
                    {patientDetails.status}
                  </Badge>
                </h4>
              </div>
              <div className="container">
                <h3 className="cardProfileName">
                  {patientDetails.firstName} {patientDetails.lastName}
                </h3>
              </div>
            </div>


            {/* profile 3 columns ------------- */}
            {/* <div className="profileDivC1 col-xs-3 col-lg-3">
              <button className=" btn btn-primary">{profile.role} </button>
            </div> */}
            {/* <div className="profileDivC2 col-xs-6 col-lg-6">
              <img src={profilePic} className="profilePic" alt="avtar" />
            </div> */}
            {/* <div className="profileDivC3 col-xs-3 col-lg-3">
              <button className=" btn btn-success">{profile.status}</button>
            </div> */}
            {/* <div className="container">
              <h3 className="cardProfileName">
                {profile.firstName} {profile.lastName}
              </h3>
            </div> */}
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
                  <div className="mt-2 col-4 custom-bold-color">Id :</div>
                  <div
                    id="inputShowEmail-profile"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.patientId}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Firstname :
                  </div>
                  <div
                    id="contact-no-tag"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.firstName}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Email :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.email}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Ward No :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.wardId}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Date of Birth :
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.dob}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Payment :
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.paymentStatus}
                  </div>
                </div>

                

                
              </div>
              {/* Right list container -------- */}
              <div className="listDivRight container col-md-6 col-xs-12">
                <div className="row my-3 " style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color"> Ward Id :</div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.wardId}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    {" "}
                    Lastname :
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.lastName}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Contact No. :
                  </div>
                  <div
                    id="inputPassword"
                    type="password"
                    required=""
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.contactNo}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Blood Group :
                  </div>
                  <div
                    id="inputPassword"
                    type="password"
                    required=""
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.bloodGroup}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Admission :
                  </div>
                  <div
                    id="inputPassword"
                    type="password"
                    required=""
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.dateOfAdmission}
                  </div>
                </div>

                <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">Diesease :</div>
                  <div
                    id="inputPassword"
                    type="password"
                    required=""
                    className=" rounded-pill border-1 shadow-sm text-dark col-12 "
                  >
                    {patientDetails.disease}
                  </div>
                </div>

                {/* <div className="row my-3" style={{ width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Blood Group :
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  >
                    {patientDetails.bloodGroup}
                  </div>
                </div> */}
              </div>
            </div>

            <div className="container">
                <div className="row my-3" >
                  <div className="col-4"></div>
                  <div className=" mt-2 col-4 custom-bold-color ">Doctor Allocated</div>
                  <div className="col-4"></div>
                </div>

                <div className="  my-3  row" >

                {doctorsAllocated.map((i) => (
                        
                       <div className=" rounded-pill border-1 shadow-sm text-dark  col-12 my-3 "  key={i.doctorId}>{i.firstName}</div> 
                    ))}
                  
                </div>

                <div className="buttonHolderDiv row">

                  <div className="form-group col-md-4 mt-2"></div>

                  <div className="form-group col-md-4 mt-2">
                    <button
                      id="admin-addPatient-backButton-box"
                      className="btn btn-secondary w-50 mb-3"
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
            

            {/* <div className="row my-3" style={{ width: "1000px" }}>
                  <div className="mt-2 col-4 custom-bold-color">
                    Doctor Allocated :
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                  ><br></br>
                    {doctorsAllocated.map((i) => (
                       <div key={i.doctorId}>{i.firstName}</div>
                    ))}
                  </div>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
