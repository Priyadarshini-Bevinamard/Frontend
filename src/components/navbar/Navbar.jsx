import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isAdmin, isLoggedIn, onLogout }) => {

    
  return (
    <nav className="navbar">
      <div className="navbar-logo">
       
       
      <div className="navbar-logo">
  <img src="logo.png" alt="logo" className="logo-img" />
  <h2 className="logo-text">Logixa</h2>
</div>
  </div>

      <ul className="navbar-links">
        <li><Link to="/home"><strong>Home</strong></Link></li>
        <li><Link to="/about"><strong>About</strong></Link></li>
        <li><Link to="/service"><strong>Services</strong></Link></li>
        <li><Link to="/contact"><strong>Contact</strong></Link></li>

        {isAdmin && (
          <li>
            <Link to="/admin/users" className="admin-link">
              Admin Panel
            </Link>
          </li>
        )}
      </ul>

      <div className="navbar-actions">
        {!isLoggedIn ? (
          <Link to="/" className="btn-login">Login</Link>
        ) : (
          <button className="btn-logout" onClick={onLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;