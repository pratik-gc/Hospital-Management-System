import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeService from "../../services/employeeService";


const EditEmployee = () => {


    const navigate = useNavigate();
    const { id } = useParams();
    const [employeeDetails,setEmployeeDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    dob: "",
    gender: "",
    contactNo: "",
    hiringDate: "",
    salary: "",
    status: "ACTIVE"
    });
    

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


      const handleChange = (key, value) => {
        // console.log(value)
        // console.log(addpatient.firstName)
        setEmployeeDetails({ ...employeeDetails, [key]: value });
      };
    
      function saveTheEmployee() {
        employeeService
          .update(id,employeeDetails)
          .then((resp) => {
            navigate(-1);
          })
          .catch((err) => {
            console.log("some error occured");
          });
      }


    return (
        <div>
      
<div className="container mt-3 shadow-lg p-3 mb-5 bg-body rounded" >
        <div className="row justify-content-center" >
          <div className="col-md-6" style={{width:"100%"}}>
            <div className="card custom-card">
              <div className="card-header custom-header" style={{width:"100%"}}>
                <h4 style={{ color: "white" }}>Edit Employee</h4>
              </div>
              <div className="card-body row">
                {/* <form> */}
                <div className="form-group col-md-6 mt-2">
                  <label>Enter First Name</label>
                  <input
                    id="admin-editEmployee-firstName-box"
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
                    id="admin-editEmployee-lastName-box"
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
                    id="admin-editEmployee-email-box"
                    type="email"
                    className="form-control mt-1 "
                    value={employeeDetails.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Enter Phone No</label>
                  <input
                    id="admin-editEmployee-phoneNo-box"
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
                    id="admin-editEmployee-Dob-box"
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
                    id="admin-editEmployee-DateOfHiring-box"
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
                    id="admin-editEmployee-Salary-box"
                    type="number"
                    className="form-control mt-1 "
                    value={employeeDetails.salary}
                    onChange={(e) => handleChange("salary", e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group mt-2">
                  <label>Enter Gender </label>
                  <select
                    id="admin-editEmployee-Gender-box"
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

                <div className="form-group mt-2">
                <label>Role</label>
                  <input
                    id="admin-editEmployee-role-box"
                    type="text"
                    className="form-control mt-1 "
                    value={employeeDetails.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <button
                    type="submit"
                    id="admin-editEmployee-submitButton-box"
                    className="btn btn-primary custom-button custom-spacing custom-spacing-button"
                    onClick={saveTheEmployee}
                  >
                    Submit
                  </button>
                </div>

                <div className="form-group col-md-6 mt-2">
                  <button
                    id="admin-editEmployee-backButton-box"
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

export default EditEmployee;