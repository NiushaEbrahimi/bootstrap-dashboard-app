import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function SideBar({isDarkMode}) {
  const baseClasses = "rounded d-block p-2 text-decoration-none";
  return (
    <>
      <h4 className="d-none d-md-block h1 mb-3">Dashboard</h4>
      <Nav className="justify-content-around flex-md-column flex-row gap-3 p-md-3 p-0 pt-0">
        <Nav.Item>
          <NavLink
            to="/dashboard/dashboard"
            end
            className={({ isActive }) =>
              `${baseClasses} 
                ${isActive 
                  ? 'sidebar-link-activated'
                  : 'sidebar-link'
                }
                ${isDarkMode
                  ? 'text-white'
                  : 'text-dark'
                }`.trim()
            }
          >
            Dashboard
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `${baseClasses} 
                ${isActive 
                  ? 'sidebar-link-activated'
                  : 'sidebar-link'
                }
                ${isDarkMode
                  ? 'text-white'
                  : 'text-dark'
                }`.trim()
            }
          >
            Profile
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/dashboard/help"
            className={({ isActive }) =>
              `${baseClasses} 
                ${isActive 
                  ? 'sidebar-link-activated'
                  : 'sidebar-link'
                }
                ${isDarkMode
                  ? 'text-white'
                  : 'text-dark'
                }`.trim()
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