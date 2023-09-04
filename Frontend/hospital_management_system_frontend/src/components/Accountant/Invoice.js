import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import patientService from "../../services/patient.service";
import wardService from "../../services/wardService";
import userService from "../../services/userService";
import HeaderNavbar from "../General/HeaderNavbar";

const Invoice = () => {
  const [patientDetails, setPatientDetails] = useState({});

  const [wardDetails, setWardDetails] = useState({});
  const [doctorsAllocated, setDoctorsAllocated] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [generateBillFlag, setGenerateBillFlag] = useState(true);
  const [totalDays, setTotalDays] = useState(0);
  const [accountant, setAccountant] = useState({});

  const [addpatient, setaddPatient] = useState({
    firstName: "",
    lastName: "",
    paymentStatus: "",
    email: "",
    dateOfAdmission: "",
    bloodGroup: "",
    dob: "",
    disease: "",
    wardId: "",
    contactNo: "",
    prescription: "",
    gender: "",
    status: "ACTIVE",
  });

  const navigate = useNavigate();

  const {aid, id } = useParams();

  useEffect(() => {
    getPatientDetail(id);
    getDoctorsList(id);
    getAccountantDetails();
  }, []);

  useEffect(() => {
    saveAndNavigate();
  }, [flag2]);

  

  function getAccountantDetails(){
    userService
      .getUserEmailById(aid)
      .then((resp) => {
        setAccountant(resp.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }

  function getWardDetails(ward_id) {
    wardService
      .getById(ward_id)
      .then((resp) => {
        setWardDetails(resp.data);
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
    calculateNoOfDays();
    // Charges();
    setFlag(true);
  }

  function saveAndNavigate() {
    if (flag2) {
      patientService
        .update(id, addpatient)
        .then((resp) => {
          // navigate("/accountant");
          navigate(`/accountant/${aid}`);
        })
        .catch((err) => {
          console.log(err + "error occured");
        });
    }
  }

  function getDoctorsList(patientId) {
    patientService
      .getAllocatedDoctors(patientId)
      .then((resp) => {
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
        setaddPatient(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });
  }

  const handleChange = (key, value) => {
    console.log("called");
    setaddPatient({ ...addpatient, [key]: value });
  };

  function calculateDoctorCharges() {
    var sum = 0;
    doctorsAllocated.forEach((element) => {
      sum = sum + element.charges;
    });
    return sum;
  }

  function calculateNoOfDays() {
    var today = new Date();
    var admission_date = new Date(patientDetails.dateOfAdmission);
    var diff_in_time = today.getTime() - admission_date.getTime();
    var total_days = Math.floor(diff_in_time / (1000 * 3600 * 24));
    setTotalDays(total_days);
    return total_days;
  }

  function changePayStatus() {
    //console.log(addpatient);
    handleChange("paymentStatus", "PAID");
    setFlag2(true);
    
  }

  return (
    <div>
      
      <HeaderNavbar firstName={accountant.firstName} lastName={accountant.lastName} sid={accountant.userId} role={accountant.role} emailId={accountant.email} ></HeaderNavbar>
      

      <div className="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{ width: "100%" }}>
            <div className="card custom-card">
              <div
                className="card-header custom-header"
                style={{ width: "100%" }}
              >
                <h4 style={{ color: "white" }}>Invoice</h4>
              </div>
              <div className="card-body row">
                {/* <form> */}
                <div className="form-group col-md-6 mt-2">
                  <label>First Name</label>
                  <input
                    id="doctor-pat-firstName-box"
                    type="text"
                    className="form-control mt-1 "
                    value={addpatient.firstName}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-6 mt-2">
                  <label>Last Name</label>
                  <input
                    id="doctor-pat-lastName-box"
                    type="text"
                    className="form-control mt-1 "
                    value={addpatient.lastName}
                    readOnly
                  />
                </div>
                <div className="form-group col-md-6 mt-2">
                  <label>Email</label>
                  <input
                    id="doctor-pat-email"
                    type="email"
                    className="form-control mt-1 "
                    value={addpatient.email}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Phone No</label>
                  <input
                    id="doctor-pat-phno"
                    type="number"
                    className="form-control mt-1 "
                    value={addpatient.contactNo}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Date Of Birth</label>
                  <input
                    id="doctor-pat-date-dob"
                    type="date"
                    className="form-control mt-1 "
                    value={addpatient.dob}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Date Of Addmission</label>
                  <input
                    id="doctor-pat-date-doa"
                    type="date"
                    className="form-control mt-1 "
                    value={addpatient.dateOfAdmission}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Gender</label>
                  <input
                    id="doctor-ward-id"
                    className="form-control mt-1  "
                    value={addpatient.gender}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Payment Status</label>
                  <input
                    id="doctor-pat-paystatus"
                    className="form-control mt-1  "
                    value={addpatient.paymentStatus}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Ward Id</label>
                  <input
                    id="doctor-ward-id"
                    className="form-control mt-1  "
                    value={addpatient.wardId}
                    // value={wardDetails.type}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Blood Group</label>
                  <input
                    id="doctor-p-bloodgroup"
                    className="form-control mt-1 "
                    value={addpatient.bloodGroup}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label>Ward Type</label>
                  <input
                    id="doctor-ward-id"
                    className="form-control mt-1  "
                    // value={addpatient.wardId}
                    value={wardDetails.type}
                    readOnly
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <label> Allocated Doctor</label>
                  <select
                    id="select-box-assign-doctor"
                    className="form-select mt-1 "
                    aria-label="Default select example"
                  >
                    {/* <option>Already Allocated Doctor</option> */}
                    {doctorsAllocated.map((i) => (
                      <option key={i.doctorId}>
                        {i.firstName} {i.lastName}
                      </option>
                    ))}
                  </select>
                </div>

                {generateBillFlag?(
                  <div className="container row">
                  <div className="form-group col-md-6 mt-2">
                    <button
                      type="submit"
                      id="invoice-generate-bill-submit"
                      className="btn btn-primary custom-button custom-spacing custom-spacing-button"
                      onClick={() => {
                        getWardDetails(patientDetails.wardId);
                        setGenerateBillFlag(false);
                      }}
                    >
                      Generate Bill
                    </button>
                  </div>
  
                  <div className="form-group col-md-6 mt-2">
                    <button
                      id="invoice-go-backid"
                      className="btn btn-secondary  custom-spacing custom-spacing-button"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Go Back
                    </button>
                  </div>
                  </div>
                ):("")}

                

                {/* generate bill table  */}

                <div className="container mt-2">
                  {flag ? (
                    <div className="container">
                      <hr className="mb-4 mt-3"></hr>
                      <table className="table table-striped ">
                        <thead>
                          <tr>
                            <th>Sr No.</th>
                            <th>Items</th>
                            <th>charges</th>
                            <th>No of Days</th>
                            <th>Amount</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Doctor Charges</td>
                            <td>{calculateDoctorCharges()}</td>
                            <td>{totalDays}</td>
                            <td>Rs. {calculateDoctorCharges() * totalDays}</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>{wardDetails.type} Ward Charges</td>
                            <td>{wardDetails.charges}</td>
                            <td>{totalDays}</td>
                            <td>Rs. {wardDetails.charges * totalDays}</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Medical Charges</td>
                            <td>1100</td>
                            <td>{totalDays}</td>
                            <td>Rs. {1100 * totalDays}</td>
                          </tr>

                          <tr>
                            <td colSpan={4}></td>

                            <td>
                              Rs.{" "}
                              {calculateDoctorCharges() * totalDays +
                                wardDetails.charges * totalDays +
                                1100 * totalDays}
                            </td>
                          </tr>
                        </tbody>
                      </table>{" "}
                      {/* <button onClick={changePayStatus}>Pay</button> */}
                      <div
                        className="container row"
                      >
                        <div
                          className="form-group col-md-6 mt-2"
                          
                        >
                          <button
                            type="submit"
                            id="invoice-generate-bill-submit"
                            className="btn btn-primary custom-button custom-spacing custom-spacing-button"
                            onClick={changePayStatus}
                          >
                            Pay Bill
                          </button>
                        </div>

                        <div className="form-group col-md-6 mt-2">
                          <button
                            id="invoice-go-backid"
                            className="btn btn-secondary custom-spacing custom-spacing-button"
                            onClick={() => {
                              navigate(-1);
                            }}
                          >
                            Go Back
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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

export default Invoice;
