
import { Dropdown } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../images/logo.png"
function ProfileHeader() {
  // const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <!-- 1st container navbar --> */}
      <div className="p-3 mb-2 bg-light text-dark " >
        <div className="container-fluid text-center "style={{maxHeight:"25px"}}>
          <div className="row ">
            <div className="col col-lg-1">
              <img
                // href="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
                src={logo}
                alt="jkl"
                style={{ width: "45px" ,marginTop:"0px"}}
              ></img>
            </div>
            <div className="col col-lg-9" ></div>
            <div className="col col-lg-2 " >
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="bi bi-person-circle"></i>
                  <span style={{ marginLeft: "5px" }}>hrushi zade</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* 2 container */}

        {/* <div className="container-fluid ">
          <div className="p-3 mb-2 bg-success text-white">
            
            <div className="container-fluid text-center">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-primary me-md-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  onClick={() => setOpen(!open)}
                  aria-controls="collapse-filter-menu"
                  aria-expanded={open}
                >
                  <i className="bi bi-funnel"></i>
                  Filter it
                </button>
                <Link to="/addPatient" className="btn btn-primary">
                  Add Patient
                </Link>
               
              </div>
              
            </div>

            <Collapse in={open}>
              <div id="collapse-filter-menu">
                <div>
                  <div className="container-fluid text-center">
                    <div className="row">
                      <div className="col-2">Filter</div>
                      <div className="col"></div>
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <div className="col-lg-3">
                      <div className="row">
                        <div className="col-lg-12">Id</div>
                        <div className="col-lg-12">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="row">
                        <div className="col-lg-12">NAME</div>
                        <div className="col-lg-12">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="row">
                        <div className="col-lg-12">PHONE NUMBER</div>
                        <div className="col-lg-12">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <button type="button" className="btn btn-primary">
                        search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div> */}

        {/* <!-- 3 container  --> */}
        <div className="container-fluid ">
          
        </div>
        {/* <!-- 4th container --> */}

        <div className="container-fluid "></div>
      </div>
    </div>
  );
}

export default ProfileHeader;
