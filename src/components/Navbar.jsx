import { NavLink } from "react-router";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <img src="/images/house.svg"/>
      </NavLink>

      <NavLink to="/reset">
        <img src="/images/check.svg"/>
      </NavLink>

      <NavLink to="/chores">
        <img src="/images/plus.svg"/>
      </NavLink>

      <NavLink to="/rewards">
        <img src="/images/gift.svg"/>
      </NavLink>

      <NavLink to="/profiles">
        <img src="/images/person.svg"/>
      </NavLink>
    </nav>
  );
}