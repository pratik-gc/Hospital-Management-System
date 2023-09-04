import React, { useEffect, useState } from "react";
import {  Collapse } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import patientService from "../../services/patient.service";
import "bootstrap-icons/font/bootstrap-icons.css";
// import logo from "../images/logo.png"
import  '../../css/PatientcssHomePage.css';
import userService from "../../services/userService";
import HeaderNavbar from "../General/HeaderNavbar";

function PatientList() {
  const [patients, setPatients] = useState([]);

  const [open, setOpen] = useState(false);
  const [searchByFirstName, setSearchByFirstName] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");
  const [searchById, setSearchById] = useState("");
  const [accountant, setAccountant] = useState({});

  const {id} = useParams();




  const clearAllFilters = () => {
    setOpen(false);
    setSearchByEmail("");
    setSearchByFirstName("");
    setSearchById("");
  };

  const init = () => {
    patientService
      .getAll()
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
        setAccountant(resp.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);




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
      <HeaderNavbar firstName={accountant.firstName} lastName={accountant.lastName} sid={accountant.userId} role={accountant.role} emailId={accountant.email} ></HeaderNavbar>
      

      <div className="container-fluid  ">
        <div className="mt-2 mb-2 bg-light text-white shadow-lg bg-body rounded ">
          <div
            className="container-fluid text-center p-2"
            style={{ backgroundColor:"#C4C4C4" }}
             
          >         
              {/* <div id="filterdiv" */}
              <div
                className="d-grid gap-2 d-md-flex justify-content-md-end me-md-5"
                // style={{ border: "2px solid red" }}
              >
                <button
                  className="btn btn-primary me-md-5 me-xs-2"
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
                {/* <Link to="/addPatient" className="btn btn-primary">
                  Add Patient
                </Link> */}
              </div>
            
          </div>

          <Collapse in={open}>
            <div id="collapse-filter-menu" style={{ backgroundColor:"#C4C4C4" }}>
              <div className="text-dark mb-2" >
                <div className="container-fluid text-center">
                  <div className="row">
                    <div
                      className="col-2"
                      
                    >
                      
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-lg-3">
                    <div className="row">
                      {/* <div className="col-lg-12 mt-1 mx-2">Id</div> */}
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
                      {/* <div className="col-lg-12 mx-2 mt-1">Name</div> */}
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
                      {/* <div className="col-lg-12 mx-2 mt-1">Email</div> */}
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
              <th scope="col">INVOICE</th>
              {/* <th scope="col">REMOVE</th> */}
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
                      to={`/accountant/${id}/invoice/${patient.patientId}`}
                      className="btn btn-info mb-2"
                    >
                      <i className="bi bi-info-circle-fill"></i>
                      Invoice
                    </Link>
                  </td>

                  

                  {/* <td>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        handleShow(patient);
                      }}
                    >
                      <i className="bi-trash"></i>
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientList;