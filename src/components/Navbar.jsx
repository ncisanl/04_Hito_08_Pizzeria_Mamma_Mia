import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useUser } from "../context/UserContext.jsx";

export function Navbar() {
  const { totalCart } = useCart();
  // TODO: token = true --> Profile / Logout
  // TODO: token = false --> Login / Register
  const { token, logout } = useUser();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Pizzería Mamma Mía!
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                🍕 Home
              </NavLink>
            </li>
            <li className="nav-item">
              {token ? (
                <NavLink className="nav-link" to="/profile">
                  🔓 Profile
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/login">
                  🔐 Login
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {token ? (
                <button className="nav-link" onClick={() => logout()}>
                  🔒 Logout
                </button>
              ) : (
                <NavLink className="nav-link" to="/register">
                  🔐 Register
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <NavLink className="nav-link total-navbar" to="/cart">
          🛒 Total: ${totalCart.toLocaleString("es-CL")}
        </NavLink>
      </div>
    </nav>
  );
}
