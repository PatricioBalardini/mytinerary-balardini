/* eslint-disable react/prop-types */
import { FiLogOut } from "react-icons/fi";
import SecondaryButton from "../buttons/SecondaryButton";
import jwtDecode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { useEffect, useState } from "react";

const { signOut } = userActions;

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
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState();

  useEffect(() => {
    if (token) {
      const userStorage = jwtDecode(token);
      setUser(userStorage);
    }
  }, [token]);

  console.log(user);

  const handleLogout = async () => {
    dispatch(signOut())
      .then(() => {
        setUser(undefined);
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="navbar">
      {links.map((link) => (
        <NavBarLink key={link.id} label={link.label} href={link.href} />
      ))}
      {user ? (
        <div className="navbar-user">
          <p>{user.name}</p>
          <button onClick={handleLogout}>
            <FiLogOut />
          </button>
        </div>
      ) : (
        <SecondaryButton label="Login" onClick={() => navigate("/sign-in")} />
      )}
    </nav>
  );
}
