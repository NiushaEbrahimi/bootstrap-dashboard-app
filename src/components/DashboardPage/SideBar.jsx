import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import "./SideBar.css"; // Optional

function SideBar() {
  return (
    <div className="sidebar bg-light border-bottom border-md-end border-md-0 p-3">
      <h2 className="h5 h4-md mb-3">Dashboard</h2>
      <Nav className="flex-md-column flex-row">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/dashboard"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/dashboard/help"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Help
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default SideBar;