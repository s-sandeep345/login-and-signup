import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/cars">Cars</NavLink>

      <NavLink to="/api-cars">API Cars</NavLink>

      <NavLink to="/services">Services</NavLink>

      <NavLink to="/pagination">
        Pagination
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>

      <NavLink to="/profile">
        Profile
      </NavLink>

      <NavLink to="/admin">
        Admin
      </NavLink>
    </nav>
  );
}

export default Navbar;