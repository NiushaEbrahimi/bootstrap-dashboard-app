import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function SideBar() {
  return (
    <>
      <h4 className="d-none d-md-block h1 mb-3">Dashboard</h4>
      {/* TODO: had problems writing this */}
      <Nav className="justify-content-around flex-md-column flex-row gap-3 p-md-3 p-0 pt-0">
        <Nav.Item>
          <NavLink
            to="/dashboard/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "sidebar-link-activated rounded bg-grey text-white d-block p-2 text-decoration-none"
                : "sidebar-link rounded text-dark d-block p-2 text-decoration-none"
            }
          >
            Dashboard
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link-activated rounded bg-grey text-white d-block p-2 text-decoration-none"
                : "sidebar-link rounded text-dark d-block p-2 text-decoration-none"
            }
          >
            Profile
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/dashboard/help"
            className={({ isActive }) =>
              isActive
                ? "sidebar-link-activated rounded bg-grey text-white d-block p-2 text-decoration-none"
                : "sidebar-link rounded text-dark d-block p-2 text-decoration-none"
            }
          >
            Help
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default SideBar;