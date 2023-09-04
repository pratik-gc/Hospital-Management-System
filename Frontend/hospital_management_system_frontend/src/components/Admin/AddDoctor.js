import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import doctorService from "../../services/doctorService";


const AddDoctor = () => {

    const navigate = useNavigate();





const [employeeDetails,setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "12345",
    confirmPassword: "12345",
    role: "DOCTOR",
    dob: "",
    gender: "",
    contactNo: "",
    hiringDate: "",
    salary: "",
    charges: "",
    status: "ACTIVE"
    });


    const handleChange = (key, value) => {
        // console.log(value)
        setEmployeeDetails({ ...employeeDetails, [key]: value });
      };
    
      function saveTheEmployee() {
        console.log(employeeDetails);
        doctorService
          .create(employeeDetails)
          .then((resp) => {
            navigate(-1);
          })
          .catch((err) => {
            console.log("some error occured" + err);
          });
      }

    return (
        <div>
        

<div className="container mt-3 shadow-lg p-3 mb-5 bg-body rounded" >
        <div className="row justify-content-center" >
          <div className="col-md-6" style={{width:"100%"}}>
            <div className="card custom-card">
              <div className="card-header custom-header" style={{width:"100%"}}>
                <h4 style={{ color: "white" }}>Add Doctor</h4>
              </div>
              <div className="card-body row">
                {/* <form> */}
                <div className="form-group col-md-6 mt-2">
                  <label>Enter First Name</label>
                  <input
                    id="admin-addDoctor-firstName-box"
                    type="text"
                    className="form-control mt-1 "
                    value={employeeDetails.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-2">
                  <label>Enter Last Name</label>
                  <input
                    id="admin-addDoctor-lastName-box"
                    type="text"
                    className="form-control mt-1 "
                    value={employeeDetails.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-2">
                  <label>Enter Email</label>
                  <input
                    id="admin-addDoctor-email-box"
                    type="email"
                    className="form-control mt-1 "
                    value={employeeDetails.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Enter Phone No</label>
                  <input
                    id="admin-addDoctor-phoneNo-box"
                    type="number"
                    className="form-control mt-1 "
                    value={employeeDetails.contactNo}
                    onChange={(e) => handleChange("contactNo", e.target.value)}
                    required
                  />
                </div>
                
                

                <div className="form-group col-md-6 mt-2">
                  <label>Enter DOB</label>
                  <input
                    id="admin-addDoctor-Dob-box"
                    type="date"
                    className="form-control mt-1 "
                    value={employeeDetails.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    required
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Enter Date Of Hiring</label>
                  <input
                    id="admin-addDoctor-DateOfHiring-box"
                    type="date"
                    className="form-control mt-1 "
                    value={employeeDetails.hiringDate}
                    onChange={(e) => handleChange("hiringDate", e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Enter Salary</label>
                  <input
                    id="admin-addDoctor-Salary-box"
                    type="number"
                    className="form-control mt-1 "
                    value={employeeDetails.salary}
                    onChange={(e) => handleChange("salary", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Enter Charges</label>
                  <input
                    id="admin-addDoctor-Charges-box"
                    type="number"
                    className="form-control mt-1 "
                    value={employeeDetails.charges}
                    onChange={(e) => handleChange("charges", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label>Enter Gender </label>
                  <select
                    id="admin-addDoctor-Gender-box"
                    className="form-select"
                    aria-label="Default select example"
                    value={employeeDetails.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  >             
                    <option >Select gender </option>
                    <option  value="MALE">MALE</option>
                    <option  value="FEMALE">FEMALE</option>
                    <option  value="OTHER">OTHER</option>
                
                  </select>
                </div>

                <div className="form-group col-md-6 mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary custom-button custom-spacing custom-spacing-button"
                    onClick={saveTheEmployee}
                  >
                    Submit
                  </button>
                </div>

                <div className="form-group col-md-6 mt-2">
                  <button
                    className="btn btn-secondary  custom-spacing custom-spacing-button"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Go Back
                  </button>
                </div>

                <div>
                  
                </div>

                
                
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
    );
}

export default AddDoctor;