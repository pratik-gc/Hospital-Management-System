import React, { useEffect, useState } from "react";
import { Alert, Button, Collapse, Modal } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientService from "../../services/patient.service";
import ProfileHeader from "./ProfileHeader";
import "bootstrap-icons/font/bootstrap-icons.css";
// import logo from "../images/logo.png"
import  '../../css/PatientcssHomePage.css';
import HeaderNavbar from "../General/HeaderNavbar";
import userService from "../../services/userService";

function InactivePatients() {
  const [patients, setPatients] = useState([]);
 
  // const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  const [searchByFirstName, setSearchByFirstName] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");
  const [searchById, setSearchById] = useState("");
  const [recpeptionist,setReceptionist] = useState({});

  const {id} = useParams();
  const navigate = useNavigate();

  /**
   * start of alert
   */

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);

//   const handleClick = () => {
//     setShowAlert(true);
//   };

  /**
   * end of alert
   */

//   const handleClose = () => {
//     // console.log("in handle close" + id);
//     setShow(false);
//   };

//   const handleShow = (p) => {
//     setPatient(p);
//     setShow(true);
//   };

  const clearAllFilters = () => {
    setOpen(false);
    setSearchByEmail("");
    setSearchByFirstName("");
    setSearchById("");
  };

  const init = () => {
    patientService
      .getAllInactive()
      .then((response) => {
        console.log("Printing patient data", response.data);
        setPatients(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
    userService
      .getUserEmailById(id)
      .then((resp) => {
        setReceptionist(resp.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const activate = (patientId) => {
    // console.log("Printing id", id);
    patientService
      .reassign(patientId)
      .then((response) => {
        navigate(-1);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };



  const giveColorTOStatus=(status)=>{
    
    if(status === "PAID"){
      
      return <span className="badge rounded-pill text-bg-success">PAID</span>
    }
     if(status === "NOTPAID"){
      
      return <span className="badge rounded-pill text-bg-danger">NOT PAID</span>
    }else{
      return <span className="badge rounded-pill text-bg-dark"> NOT APPLICABLE </span>
    }
  }

  return (
    <div >
      <div className="container-fluid">

      {/* <ProfileHeader></ProfileHeader> */}
      <HeaderNavbar firstName={recpeptionist.firstName} lastName={recpeptionist.lastName} sid={recpeptionist.userId} role={recpeptionist.role} emailId={recpeptionist.email} ></HeaderNavbar>
      
      </div>
      

      {/* start of  filter bar */}

      {/* 2 container */}

      <div className="container-fluid ">
        <div className="mt-2 mb-2 bg-light text-white shadow-lg bg-body rounded">
          <div
            className="container-fluid text-center p-2"
            style={{backgroundColor:"#C4C4C4" }}
          >
            
              {/* <div id="filterdiv" */}
              <div
                className="d-grid gap-2 d-md-flex justify-content-md-end"
                // style={{ border: "2px solid red" }}
              >
                <button
                  className="btn btn-primary me-md-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  onClick={() => setOpen(!open)}
                  aria-controls="collapse-filter-menu"
                  aria-expanded={open}
                  // style={{ border: "2px solid black" }}
                >
                  <i className="bi bi-funnel"></i>
                  Filter it
                </button>
                <button className="btn btn-primary" onClick={()=>{
                    navigate(-1);
                }}>
                Go Back
                </button>
                {/* <Link to="/" className="btn btn-primary">
                  Go Back
                </Link> */}
              </div>
            
          </div>

          <Collapse in={open}>
            <div id="collapse-filter-menu" style={{backgroundColor:"#C4C4C4" }}>
              <div className="text-dark mb-2">
                <div className="container-fluid text-center">
                  <div className="row">
                    <div
                      className="col-2"
                      
                    >
                      Filter
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-lg-3">
                    <div className="row">
                      {/* <div className="col-lg-12">Id</div> */}
                      <div className="col-lg-12 mx-2 mb-2 mt-4">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search By Id"
                          aria-label="Search"
                          value={searchById}
                          onChange={(e) => setSearchById(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="row">
                      {/* <div className="col-lg-12">NAME</div> */}
                      <div className="col-lg-12 mx-2 mb-2 mt-4">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search By Name"
                          aria-label="Search"
                          value={searchByFirstName}
                          onChange={(e) => setSearchByFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="row">
                      {/* <div className="col-lg-12">Email</div> */}
                      <div className="col-lg-12 mx-2 mb-2 mt-4">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search By Email"
                          aria-label="Search"
                          value={searchByEmail}
                          onChange={(e) => setSearchByEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3" >
                    <button
                    // style={{marginTop:"10px"}}
                      type="button"
                      className="btn btn-primary mt-4"
                      onClick={() => {
                        clearAllFilters();
                      }}
                    >
                      clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>

      {/* end of filter bar */}

      {/* start of tables */}

      <div className="container-fluid ">
        <table className="table table-secondary table-striped shadow-lg bg-body rounded">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">STATUS</th>
              <th scope="col">DETAILS</th>
              <th scope="col">EDIT</th>
              <th scope="col">ACTIVATE</th>
            </tr>
          </thead>
          <tbody>
            {patients
              .filter((cf) => {
                if (
                  (searchByFirstName === "" ||
                    searchByFirstName.trim() === "") &&
                  (searchById === "" || searchById.trim() === "") &&
                  (searchByEmail === "" || searchByEmail.trim() === "")
                ) {
                  return cf;
                } else if (
                  (cf.firstName
                    .toLowerCase()
                    .includes(searchByFirstName.toLowerCase()) ||

                    cf.lastName
                    .toLowerCase()
                    .includes(searchByFirstName.toLowerCase())) &&

                  cf.patientId.toString().includes(searchById.toLowerCase())
                   && cf.email.toLowerCase().includes(searchByEmail.toLowerCase())
                ) {
                  return cf;
                }else{
                  return false;
                }
              })

            .map((patient) => (
                <tr key={patient.patientId}>
                  <td>{patient.patientId}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.email}</td>

                  {/* <td>{patient.payStatus}</td> */}
                  <td>{giveColorTOStatus(patient.paymentStatus)}</td>
                  {/* <td><span class="badge rounded-pill text-bg-success">{patient.payStatus}</span></td> */}

                  <td>
                    <Link
                      to={`/patientDetails/${patient.patientId}`}
                      className="btn btn-info mb-2"
                    >
                      <i className="bi bi-info-circle-fill"></i>
                      Info
                    </Link>
                  </td>

                  <td>
                    <Link
                      className="btn btn-secondary"
                      to={`/patient/edit/${patient.patientId}`}
                    >
                      <i className="bi bi-pencil-square"></i>
                      Edit
                    </Link>
                  </td>

                  <td>
                    <button
                      className="btn btn-success ml-2"
                      onClick={()=>{
                        activate(patient.patientId);
                      }}
                    >
                      <i className="bi bi-arrow-counterclockwise"></i>
                      Activate
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InactivePatients;
