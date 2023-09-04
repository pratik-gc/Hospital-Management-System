import { useEffect, useState } from "react";
import userService from "../../services/userService";
import { useNavigate } from "react-router-dom";
import "../../css/customLogin.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState();
  const [flag,setFlag] = useState(false);

  const navigate = useNavigate();

  function getUser(d) {
    console.log("+++++++++++++++++++++");
    console.log(userService.getToken());
    console.log(d);
    userService
      .getUser(d)
      .then((resp) => {
        console.log("hrushi");
        console.log(resp.data);
        localStorage.setItem("role",resp.data.role);
        if (resp.data.role === "ADMIN") {
          navigate("/admin/" + resp.data.userId);
        } else if (resp.data.role === "RECEPTIONIST") {
          navigate("/receptionist/" + resp.data.userId);
        } else if (resp.data.role === "DOCTOR") {
          navigate("/doctors/" + resp.data.roleId);
        } else if (resp.data.role === "PATIENT") {
          navigate("/patientView/" + resp.data.roleId);
        } else if (resp.data.role === "ACCOUNTANT") {
          navigate("/accountant/" + resp.data.userId);
        } else {
          console.log("Error");
        }
      })
      .catch((err) => {
        console.log("Error 2" + err);
      });
  }

  useEffect(() => {
    if (flag === true) {
      const timer = setTimeout(() => {
        setFlag(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [flag]);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      getUser(user);
    }
  }, [token]);

  function getTokenAndStore(userData) {
    userService
      .getTokenRequest(userData)
      .then((resp) => {
        localStorage.setItem("token", resp.data.jwt);
        setToken(resp.data.jwt);
      })
      .catch((err) => {
        console.log("Error 1" + err);
        setFlag(true);
      });
  }

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <div>

      <div className="container-fluid">
        <div className="row no-gutter">
          {/* <!-- The image half --> */}
          <div className="col-md-6 d-none d-md-flex bg-image"></div>

          {/* <!-- The content half --> */}
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              {/* <!-- Demo content--> */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Welcome </h3>
                    <p className="text-muted mb-4"></p>
                    <form>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          value={user.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          autoFocus
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required=""
                          value={user.password}
                          onChange={(e) =>
                            handleChange("password", e.target.value)
                          }
                          className={
                            flag
                              ? "form-control rounded-pill border-0  px-4 text-primary custom-shade custom-shake"
                              : "form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          }
                          // className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                      </div>

                      <button
                        type="button"
                        id="loginpage_login"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm custom-button-side"
                        onClick={() => {
                          getTokenAndStore(user);
                        }}
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-block text-uppercase mb-2 rounded-pill shadow-sm custom-button-side"
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Back
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
