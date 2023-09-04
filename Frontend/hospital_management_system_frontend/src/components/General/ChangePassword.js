import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../services/userService";
import "../../css/customPassword.css";

const ChangePassword = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  useEffect(() => {
    if (flag === true) {
      const timer = setTimeout(() => {
        setFlag(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [flag]);

  useEffect(() => {
    userService
      .getUserEmailById(id)
      .then((resp) => {
        handleChange("email", resp.data.email);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  const saveAndSubmit = () => {
    if (user.password === confirmPassword) {
      userService
        .changePassword(user)
        .then((resp) => {
          localStorage.removeItem("token");
          navigate("/login");
        })
        .catch((err) => {
          console.log("Error" + err);
        });
    } else {
      setFlag(true);
      // alert('Passwords do not match');
    }
  };

  return (
    <div>
      <div className="container mt-5 " >
        <div className="row justify-content-center ">
          <div className="col-md-6 ">
            <div className="card custom-card m-3 shadow-lg bg-white rounded">
              <div className="card-header custom-header">
                <h4 style={{ color: "white" }}>Change Password</h4>
              </div>
              <div className="card-body">
                {/* <form> */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    id="email-box"
                    type="email"
                    className="form-control "
                    value={user.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="form-group custom-spacing">
                  <label>New Password</label>
                  <input
                    id="password-box"
                    type="password"
                    className="form-control "
                    value={user.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className="form-group custom-spacing">
                  <label>Confirm Password</label>
                  <input
                    id="confirmPassword-box"
                    type="password"
                    // className="form-control"
                    className={
                      flag
                        ? "form-control custom-shade custom-shake"
                        : "form-control"
                    }
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter confirm password"
                    required
                  />
                </div>

                

                <button
                  type="submit"
                  className="btn btn-primary custom-button custom-spacing custom-spacing-button"
                  onClick={saveAndSubmit}
                >
                  Change Password
                </button>
                <button
                  className="btn btn-secondary  custom-spacing custom-spacing-button"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
