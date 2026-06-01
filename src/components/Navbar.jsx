import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <img src="/images/house.svg"/>
      </NavLink>

      <NavLink to="/about">
        <img src="/images/check.svg"/>
      </NavLink>

      <NavLink to="/reset">
        <img src="/images/plus.svg"/>
      </NavLink>

      <NavLink to="/posts">
        <img src="/images/gift.svg"/>
      </NavLink>

      <NavLink to="/contact">
        <img src="/images/person.svg"/>
      </NavLink>
    </nav>
  );
}