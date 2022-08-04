import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import logo from "./IH.png";
import "./styles.css";

function Navbar() {
  return (
    <div className="navcontainer">
      <div className="nav-left">
        <NavLink to="/">
          <img className="nav-logo" src={logo} alt="" />
        </NavLink>
        <div className="nav-links">
          <NavLink
            className="links"
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "lightgrey" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            className="links"
            to="/shop"
            style={({ isActive }) =>
              isActive ? { color: "lightgrey" } : undefined
            }
          >
            Shop
          </NavLink>
          <NavLink
            className="links"
            to="/details/:id"
            style={({ isActive }) =>
              isActive ? { color: "lightgrey" } : undefined
            }
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <form action="/" method="GET" className="form">
            <input
              type="search"
              placeholder="Search"
              className="search-field"
            />
            <button type="submit" className="search-button">
              <img
                src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"
                alt=""
              />
            </button>
          </form>
        </div>
        <BsCart2 className="icons" color="white" />
        <FiHeart className="icons" color="white" />
        <NavLink to="/login">
          <FaRegUser className="icons" color="white" />
        </NavLink>
      </div>
    </div>
  );
}

export { Navbar };
