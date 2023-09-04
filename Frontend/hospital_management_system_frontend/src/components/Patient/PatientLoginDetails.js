import { useEffect, useState } from "react";
import avtar from "../../images/UserAvtar.png";
import profilePic from "../../images/user_icon.png";
import patient_male from "../../images/avtars/user_man.jpg";
import patient_female from "../../images/avtars/user_female2.jpg";
import "../../css/customProfile.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientUserService from "../../services/patientUserService";
import patientService from "../../services/patient.service";
import "../../css/profile.css";
import { Badge, Container, NavDropdown, Navbar } from "react-bootstrap";
import userService from "../../services/userService";
function PatientLoginDetails() {
  
  const [patientUser, setPatientUser] = useState([]);
  const [doctorsAllocated, setDoctorsAllocated] = useState([]);
  const [pass, setPass] = useState(
    {
        email: "",
        password: ""
    }
  );

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    // patientUserService
    //   .get(id)
    //   .then((resp) => { 
    //     console.log(resp.data);
    //     setPatientUser(resp.data);
    //     setPass({...pass,email:resp.data.email});

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    getPatientDetail(id);
    getDoctorsList(id);
  }, []);

  function getPatientDetail(patientId) {
    patientService
      .get(id)
      .then((resp) => { 
        console.log(resp.data);
        setPatientUser(resp.data);
        setPass({...pass,email:resp.data.email});

      })
      .catch((err) => {
        console.log(err);
      });
  }

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

  // useEffect(() => {
  //   setPass(prevPass => ({
  //     ...prevPass,
  //     email: patientUser.emailId
  //   }));
  // }, [patientUser.emailId]);

  const changePassword = () => {
    userService.getUserByEmail(pass).then((resp)=>{
        navigate(`/changePassword/${resp.data.userId}`);
    }).catch((err)=>{
        console.log("error");
    })
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand ><Link to={"/"} style={{color:"white",textDecoration:"none"}}>Silver Spring Hospital</Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <i
              className="bi bi-person-circle"
              style={{ color: "White", marginRight: "4px" }}
            ></i>
            <NavDropdown
              title={patientUser.firstName}
              style={{ color: "White" }}
              id="basic-nav-dropdown"
            >
              
              <NavDropdown.Item>
                <button className="nav-link mx-auto w-100" onClick={changePassword}>
                  Change Password
                </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button
                  className="btn btn-danger mx-auto w-100"
                  onClick={logout}
                  style={{ width: "100%" }}
                >
                  Log Out
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  



    <div className="mainDiv">
        {/* Card----------------------- */}
        <div className="cardHolder my-5" style={{width:"65%"}}>
          {/* Profile section ----------------- */}
          <div
            className="card-containerDiv-Profile shadow row"
            
          >
            {/* profile 3 columns ------------- */}
            <div className="profileDivC1 col-xs-3 col-lg-3">
            <h4>
              <Badge pill bg="warning" text="dark">
              {patientUser.role}
              </Badge>
              </h4>
            </div>
            <div className="profileDivC2 col-xs-6 col-lg-6">
            {patientUser.gender==="MALE"?
              <img src={patient_male} className="profilePic" alt="avtar" />:
              <img src={patient_female} className="profilePic" alt="avtar" />
            }
            </div>
            <div className="profileDivC3 col-xs-3 col-lg-3">
            <h4>
              <Badge pill bg={patientUser.status==="ACTIVE"?"success":"danger"} text="white">
              {patientUser.status}
              </Badge>
              </h4>
              
            </div>
            <div className="container">
              <h3 className="cardProfileName">
                {patientUser.firstName} {patientUser.lastName}
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
                    {patientUser.email}
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
                    {patientUser.contactNo}
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
                    {patientUser.dob}
                  </div>
                </div>
                
                
                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Disease :
                  </div>
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {patientUser.disease}
                  </div>
                </div>
                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    BloodGroup :
                  </div>
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {patientUser.bloodGroup}
                  </div>
                </div>


                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Prescription :
                  </div>
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {patientUser.prescription}
                  </div>
                </div>
                


              </div>
              {/* right list container -------- */}
              <div className="listDivRight container col-md-6 col-xs-12">

              <div className="row my-3 " style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                     Patient Id:
                  </div>
                  <div
                    id="inputPassword"
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {patientUser.patientId}
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
                    {patientUser.gender}
                  </div>
                </div>
                

                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                  RegisterDate :
                  </div>
                  <div
                    id="inputPassword"
                    type="password"
                    required=""
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {patientUser.dateOfAdmission}
                  </div>
                </div>


                
                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    PayStatus :
                  </div>
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {patientUser.paymentStatus}
                  </div>
                </div>
                
                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    Ward ID :
                  </div>
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {patientUser.wardId}
                  </div>
                </div>

                <div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    AllocatedDrs. :
                  </div>
                  
                  {/* <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {doctorsAllocated.map((i)=>i.firstName)}
                  </div> */}

                  {/* kjdsf */}
                  {/* <div className="rounded-pill border-1 shadow-sm text-dark col-8"> */}
                  <div className="col-8 " >
                  <select
                    id="select-box-assign-doctor"
                    className="form-select rounded-pill border-1 shadow-sm text-dark "
                    // style={{width:"100%"}}
                    // aria-label="Default select example"
                    
                  >
                    {/* <option>Select Doctor</option> */}

                    {doctorsAllocated.map((i) => (
                      <option key={i.doctorId} value={i.doctorId}>
                        {i.firstName} {i.lastName}
                      </option>
                    ))}
                  </select>
                  </div>




                </div>
                
        
              </div>




            </div>
              {/* <div className="container row" style={{width:"100%",height:"150px" ,border : "2px solid red"}}>

<div className="col-lg-6"style={{height:"10px" ,border : "2px solid green"}}>
<div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    AllocatedDrs. :
                  </div>
                  
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {doctorsAllocated.map((i)=>i.firstName)}
                  </div>
                </div>
</div>
<div className="col-lg-6"style={{height:"10px" ,border : "2px solid green"}}>
<div className="row my-3" style={{width: "450px" }}>
                  <div className="mt-2 col-4 custom-bold-color" >
                    AllocatedDrs. :
                  </div>
                  
                  <div
                    id="inputPassword"
                    
                    className=" rounded-pill border-1 shadow-sm text-dark col-8 "
                    
                  >
                    {doctorsAllocated.map((i)=>i.firstName)}
                  </div>
                </div>
</div>

              </div> */}
            
          </div>
        </div>
        
      </div>      


    </div>
  );
}

export default PatientLoginDetails;
