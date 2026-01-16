import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h3 className="navbar-title">FAQ System</h3>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          {!token && (
            <Link to="/admin/login" className="nav-link">
              Admin Login
            </Link>
          )}

          {token && (
            <>
              <Link to="/admin/dashboard" className="nav-link">
                Dashboard
              </Link>
              <button className="logout-btn" onClick={logoutHandler}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
