import { NavLink } from "react-router";
import "./Navbar.css";
export default function Navbar() {
  const base = import.meta.env.BASE_URL;

  return (
    <nav>
      <NavLink to="/">
        <img src={`${base}images/house.svg`} />
      </NavLink>

      <NavLink to="/reset">
        <img src={`${base}images/check.svg`} />
      </NavLink>

      <NavLink to="/chores">
        <img src={`${base}images/plus.svg`} />
      </NavLink>

      <NavLink to="/rewards">
        <img src={`${base}images/gift.svg`} />
      </NavLink>

      <NavLink to="/profiles">
        <img src={`${base}images/person.svg`} />
      </NavLink>
    </nav>
  );
}
