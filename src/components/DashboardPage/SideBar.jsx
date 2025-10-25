import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function SideBar() {
  return (
    <>
    {/* <div className="sidebar bg-light border-bottom border-md-end border-md-0 p-3"> */}
      <h2 className="d-none d-md-block h4-md mb-3">Dashboard</h2>
      <Nav className="justify-content-around flex-md-column flex-row gap-3">
        <Nav.Item className="rounded">
          <Nav.Link
            as={NavLink}
            to="/dashboard/dashboard"
            end
            className={(isActive)=>{isActive ? "rounded bg-dark text-white" : "rounded bg-light text-dark"}}
          >
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/profile"
            className={(isActive)=>{isActive ? "rounded bg-dark text-white" : "rounded bg-light text-dark"}}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/help"
            className={(isActive)=>{isActive ? "rounded bg-dark text-white" : "rounded bg-light text-dark"}}
          >
            Help
          </Nav.Link>
        </Nav.Item>
      </Nav>
    {/* </div> */}
    </>
  );
}

export default SideBar;