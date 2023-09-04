import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import PatientHomePage from "./components/Receptionist/PatientHomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPatient from "./components/Receptionist/AddPatient";
import PatientDetails from "./components/Receptionist/PatientDetails";
import EditPatient from "./components/Receptionist/EditPatient";
import PatientLoginDetails from "./components/Patient/PatientLoginDetails";
import AdminPage from "./components/Admin/AdminPage";
import AddEmployee from "./components/Admin/AddEmployee";
import EditEmployee from "./components/Admin/EditEmployee";
import EmployeeInfo from "./components/Admin/EmployeeInfo";
import AddDoctor from "./components/Admin/AddDoctor";
import PatientList from "./components/Accountant/PatientList";
import Invoice from "./components/Accountant/Invoice";
import AddPrescription from "./components/Doctor/AddPrescription";
import DoctorPage from "./components/Doctor/DoctorPage";
import Login from "./components/Signin/Login";
import DoctorProfile from "./components/Doctor/DoctorProfile";
import ChangePassword from "./components/General/ChangePassword";
import InactivePatients from "./components/Receptionist/InactivePatient";
import InactiveEmployees from "./components/Admin/InactiveEmployees";
import ReceptionistProfile from "./components/Receptionist/ReceptionistProfile";
import AdminProfile from "./components/Admin/AdminProfile";
import AccountantProfile from "./components/Accountant/AccountantProfile";
import Protected from "./components/ProtectedRoutes/Protected";
import UnAuthorised from "./components/General/UnAuthorisedUser";
import NotFound from "./components/General/NotFound";
import HomePage from "./components/General/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

        {/* receptionist page routes */}
          {/* <Route exact path="/" element={<TImePass />} /> */}

          {/* patient as user routes */}
          <Route path="/patientView/:id" element={<Protected Component={PatientLoginDetails} Role1="PATIENT" />} />

          {/* receptionist page routes */}
          <Route exact path="/receptionist/:id" element={<Protected Component={PatientHomePage} Role1="RECEPTIONIST"/>} />
          <Route path="/addPatient" element={<Protected Component={AddPatient} Role1="RECEPTIONIST"/>} />
          <Route path="/patientDetails/:id" element={<Protected Component={PatientDetails} Role1="RECEPTIONIST"/>} />
          <Route path="/patient/edit/:id" element={<Protected Component={EditPatient} Role1="RECEPTIONIST"/>} />
          <Route path="/receptionist/:id/inactivePatients" element={<Protected Component={InactivePatients} Role1="RECEPTIONIST"/>} />
          <Route path="/receptionist/profile/:id" element={<Protected Component={ReceptionistProfile} Role1="RECEPTIONIST"/>} />

          {/* admin page routes */}
          <Route path="/admin/:id" element={<Protected Component={AdminPage} Role1="ADMIN"/>} />
          <Route path="/admin/add" element={<Protected Component={AddEmployee} Role1="ADMIN"/>} />
          <Route path="/admin/addDoctor" element={<Protected Component={AddDoctor} Role1="ADMIN"/>} />
          <Route path="/admin/edit/:id" element={<Protected Component={EditEmployee} Role1="ADMIN"/>} />
          <Route path="/admin/info/:id" element={<Protected Component={EmployeeInfo} Role1="ADMIN"/>} />
          <Route path="/admin/:id/inactiveEmployees" element={<Protected Component={InactiveEmployees} Role1="ADMIN"/>} />
          <Route path="/admin/profile/:id" element={<Protected Component={AdminProfile} Role1="ADMIN"/>} />

          {/* accountant page routes */}
          <Route exact path="/accountant/:id" element={<Protected Component={PatientList} Role1="ACCOUNTANT"/>} />
          <Route path="/accountant/:aid/invoice/:id" element={<Protected Component={Invoice} Role1="ACCOUNTANT"/>} />
          <Route path="/accountant/profile/:id" element={<Protected Component={AccountantProfile} Role1="ACCOUNTANT"/>} />

          {/* doctor page routes */}
          <Route path="/doctors/:id" element={<Protected Component={DoctorPage} Role1="DOCTOR"/>} />
          <Route path="/doctors/profile/:id" element={<Protected Component={DoctorProfile} Role1="DOCTOR"/>} />
          <Route
            path="/doctors/:doc_id/patient/:pat_id"
            element={<Protected Component={AddPrescription} Role1="DOCTOR"/>}
          />

          {/* general page route */}
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword/:id" element={<ChangePassword />} />
          <Route path="/unauthorised" element={<UnAuthorised />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
