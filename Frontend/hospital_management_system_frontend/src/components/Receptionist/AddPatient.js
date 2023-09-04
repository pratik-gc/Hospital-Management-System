import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import patientService from "../../services/patient.service";

// import Practise2 from "./Practise2";
import doctorService from "../../services/doctorService";
import wardService from "../../services/wardService";
const AddPatient = () => {
  const navigate = useNavigate();
  const [addpatient, setaddPatient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfAdmission: "",
    bloodGroup: "",
    dob: "",
    gender: "",
    role: "PATIENT",
    doctorId: "",
    wardId: "",
    disease: "",
    paymentStatus: "NOTPAID",
    contactNo: "",
    prescription: "",
    password: "12345",
    confirmPassword: "12345",
    status: "ACTIVE"
  });

  const [doctorList, setDoctorList] = useState([]);
  const [wardList, setWardList] = useState([]);



  useEffect(() => {
    getAllDoctors();
    getAllWards();
  }, []);

  function getAllDoctors() {
    doctorService
      .getAll()
      .then((resp) => {
        console.log(resp.data);
        setDoctorList(resp.data);
      })
      .catch((err) => {});
  }
  function getAllWards() {
    wardService
      .getAll()
      .then((resp) => {
        console.log(resp.data);
        setWardList(resp.data);
      })
      .catch((err) => {});
  }

  const handleChange = (key, value) => {
    // console.log(value)
    setaddPatient({ ...addpatient, [key]: value });
  };

  function saveThePatient() {
    console.log(addpatient);
    patientService
      .create(addpatient)
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
                <h4 style={{ color: "white" }}>Add Patient</h4>
              </div>
              <div className="card-body row">
                {/* <form> */}
                <div className="form-group col-md-6 mt-2">
                  <label>Enter First Name</label>
                  <input
                    id="admin-addEmployee-firstName-box"
                    type="text"
                    className="form-control mt-1 "
                    value={addpatient.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-2">
                  <label>Enter Last Name</label>
                  <input
                    id="admin-addEmployee-lastName-box"
                    type="text"
                    className="form-control mt-1 "
                    value={addpatient.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-2">
                  <label>Enter Email</label>
                  <input
                    id="admin-addEmployee-email-box"
                    type="email"
                    className="form-control mt-1 "
                    value={addpatient.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Enter Phone No</label>
                  <input
                    id="admin-addEmployee-phoneNo-box"
                    type="number"
                    className="form-control mt-1 "
                    value={addpatient.contactNo}
                    onChange={(e) => handleChange("contactNo", e.target.value)}
                    required
                  />
                </div>
                

                <div className="form-group col-md-6 mt-2">
                  <label>Enter DOB</label>
                  <input
                    id="admin-addEmployee-Dob-box"
                    type="date"
                    className="form-control mt-1 "
                    value={addpatient.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    required
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Enter Date Of Admission</label>
                  <input
                    id="admin-addEmployee-DateOfHiring-box"
                    type="date"
                    className="form-control mt-1 "
                    value={addpatient.dateOfAdmission}
                    onChange={(e) => handleChange("dateOfAdmission", e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Enter Disease</label>
                  <input
                    id="admin-addEmployee-Salary-box"
                    type="text"
                    className="form-control mt-1 "
                    value={addpatient.disease}
                    onChange={(e) => handleChange("disease", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label>Enter Gender </label>
                  <select
                    id="admin-addEmployee-Gender-box"
                    className="form-select"
                    aria-label="Default select example"
                    value={addpatient.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  >             
                    <option >Select gender </option>
                    <option  value="MALE">MALE</option>
                    <option  value="FEMALE">FEMALE</option>
                    <option  value="OTHER">OTHER</option>
                
                  </select>
                </div>

                <div className="form-group mt-2">
                <label>Select Doctor </label>
                <select
                  id="admin-addEmployee-Role-box"
                  className="form-select"
                  aria-label="Default select example"
                  value={addpatient.doctorId}
                  onChange={(e) => handleChange("doctorId", e.target.value)}>
                    <option >Open this select menu</option>

                    {doctorList.map((i) => (
                      <option key={i.doctorId} value={i.doctorId}>
                        {i.firstName} {i.lastName}
                      </option>
                    ))}
                
                </select>
                </div>

                <div className="form-group mt-2">
                <label>Select Ward </label>
                <select
                  id="admin-addEmployee-Role-box"
                  className="form-select"
                  aria-label="Default select example"
                  value={addpatient.wardId}
                  onChange={(e) => handleChange("wardId", e.target.value)}>
                  <option >Select ward </option>

                  {wardList.map((j) => (
                    <option key={j.wardId} value={j.wardId}>{j.type}</option>
                  ))}
                
                </select>
                </div>

                <div className="form-group mt-2">
                <label>Select bloodGroup</label>
                <select
                  id="admin-addEmployee-Role-box"
                  className="form-select"
                  aria-label="Default select example"
                  value={addpatient.bloodGroup}
                  onChange={(e) => handleChange("bloodGroup", e.target.value)}>
                  
                  <option >Select  bloodGroup </option>
                    <option  value="A_POSITIVE">A+</option>
                    <option  value="A_NEGATIVE">A-</option>
                    <option  value="B_POSITIVE">B+</option>
                    <option  value="B_NEGATIVE">B-</option>
                    <option  value="AB_POSITIVE">AB+</option>
                    <option  value="AB_NEGATIVE">AB-</option>
                    <option  value="O_POSITIVE">O+</option>
                    <option  value="O_NEGATIVE">O-</option>
                
                </select>
                </div>

                <div className="form-group col-md-6 mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary custom-button custom-spacing custom-spacing-button"
                    onClick={saveThePatient}
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
};

export default AddPatient;
