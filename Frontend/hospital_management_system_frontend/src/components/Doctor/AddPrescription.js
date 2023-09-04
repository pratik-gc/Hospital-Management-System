import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientService from "../../services/patient.service";
import doctorService from "../../services/doctorService";
import { Badge } from "react-bootstrap";
import profilePic from "../../images/user_icon.png";
import "../../css/customProfile.css";
import HeaderNavbar from "../General/HeaderNavbar";

const AddPrescription = () => {
  const navigate = useNavigate();
  const { doc_id, pat_id } = useParams();
  const [doctorList, setDoctorList] = useState([]);
  const [edited, setEdited] = useState(false);
  const [doctor, setDoctor] = useState({});
  const [doctorId, setDoctorId] = useState(0);
  const [doctorsAllocated, setDoctorsAllocated] = useState([]);

  // let nav_url = "/doctors/" + doc_id;

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

  useEffect(() => {
    getPatientDetail(pat_id);
    getAllDoctors();
    getDoctorsList(pat_id);
    getDoctorsInfo(doc_id);
  }, []);

  function getAllDoctors() {
    doctorService
      .getAll()
      .then((resp) => {
        setDoctorList(resp.data);
      })
      .catch((err) => {});
  }

  function getPatientDetail(patientId) {
    patientService
      .get(patientId)
      .then((resp) => {
        setaddPatient(resp.data);
      })
      .catch((error) => {
        console.log(error + "error occured");
      });

    // nav_url = nav_url + doc_id;
  }

  function saveDoctor(patient_id, doctor_id) {
    doctorService
      .addDoctor(patient_id, doctor_id)
      .then((resp) => {
        console.log("added");
      })
      .catch((err) => {
        console.log("Error:" + err);
      });
  }

  const handleChange = (key, value) => {
    setEdited(true);
    setaddPatient({ ...addpatient, [key]: value });
  };

  function saveThePatient() {
    patientService
      .update(pat_id, addpatient)
      .then((resp) => {
        // navigate(nav_url);
        //console.log("changes made successfully");
      })
      .catch((err) => {
        console.log("some error occured");
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

  function getDoctorsInfo(docs_id) {
    doctorService
      .getDoctorInfo(docs_id)
      .then((resp) => {
        console.log("**********");
        console.log(resp.data);
        setDoctor(resp.data);
      })
      .catch((err) => {
        console.log("error " + err);
      });
  }

  function savePatientDetails() {
    if (edited) {
      saveThePatient();
    }
    if (doctorId > 0) {
      saveDoctor(pat_id, doctorId);
    }
    navigate(`/doctors/${doc_id}`);
  }

  return (
    <div>
      <HeaderNavbar firstName={doctor.firstName} lastName={doctor.lastName} sid={doctor.doctorId} role={doctor.role} emailId={doctor.email} ></HeaderNavbar>

      {/* start  hrushi */}
      <div className="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{ width: "100%" }}>
            <div className="card custom-card">
              <div
                className="card-header custom-header"
                style={{ width: "100%" }}
              >
                <h4 style={{ color: "white" }}>Add Prescription</h4>
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
                  <label> Already Allocated Doctor</label>
                  <select
                    id="select-box-assign-doctor"
                    className="form-select"
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


                <div className="form-group col-md-6 mt-2">
                  <label> Assign Additional Doctor</label>
                  <select
                    id="select-box-assign-doctor"
                    className="form-select"
                    aria-label="Default select example"
                    value={addpatient.doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                  >
                    <option>Select Doctor</option>

                    {doctorList.map((i) => (
                      <option key={i.doctorId} value={i.doctorId}>
                        {i.firstName} {i.lastName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div className="form-group mt-2">
                  <label>Enter Gender </label>
                  <select
                    id="admin-editEmployee-Gender-box"
                    className="form-select"
                    aria-label="Default select example"
                    value={addpatient.gender}
                    onChange={(e) => handleChange("gender", e.target.value)}
                  >
                    <option>Select gender </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                </div> */}

                <div className="form-group mt-2">
                  <label>Enter Diseases and Symptoms</label>
                  <textarea
                    id="doctor-pat-disease-box"
                    type="text"
                    className="form-control mt-1 "
                    value={addpatient.disease}
                    onChange={(e) => handleChange("disease", e.target.value)}
                  />
                </div>

                <div className="form-group mt-2">
                  <label>Enter Prescription</label>
                  <textarea
                    id="doctor-pat-prescription-box"
                    type="text"
                    className="form-control mt-1 "
                    value={addpatient.prescription}
                    onChange={(e) =>
                      handleChange("prescription", e.target.value)
                    }
                  />
                </div>

                <div className="form-group col-md-6 mt-2">
                  <button
                    type="submit"
                    id="admin-editEmployee-submitButton-box"
                    className="btn btn-primary custom-button custom-spacing custom-spacing-button"
                    onClick={savePatientDetails}
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

                <div></div>

                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrescription;
