import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function SideBar() {
  return (
    <>
      <h2 className="d-none d-md-block h4 mb-3">Dashboard</h2>
      {/* TODO: had problems writing this */}
      <Nav className="justify-content-around flex-md-column flex-row gap-3">
        <Nav.Item>
          <NavLink
            to="/dashboard/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "rounded bg-secondary text-white d-block p-2 text-decoration-none"
                : "rounded bg-light text-dark d-block p-2 text-decoration-none"
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
                ? "rounded bg-secondary text-white d-block p-2 text-decoration-none"
                : "rounded bg-light text-dark d-block p-2 text-decoration-none"
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
                ? "rounded bg-secondary text-white d-block p-2 text-decoration-none"
                : "rounded bg-light text-dark d-block p-2 text-decoration-none"
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