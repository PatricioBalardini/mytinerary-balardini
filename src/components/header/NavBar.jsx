/* eslint-disable react/prop-types */
import SecondaryButton from "../buttons/SecondaryButton";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { id: "home", label: "Home", href: "/home" },
  { id: "cities", label: "Cities", href: "/cities" },
];

const NavBarLink = ({ label, href }) => {
  return (
    <div className="navbar-link">
      <Link to={href}>{label}</Link>
    </div>
  );
};

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      {links.map((link) => (
        <NavBarLink key={link.id} label={link.label} href={link.href} />
      ))}
      <SecondaryButton label="Login" onClick={() => navigate("/login")} />
    </nav>
  );
}
