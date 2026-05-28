import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Belønninger</NavLink>
      <NavLink to="/about">Daglige pligter</NavLink>
      <NavLink to="/contact">Profil</NavLink>
    </nav>
  );
}
