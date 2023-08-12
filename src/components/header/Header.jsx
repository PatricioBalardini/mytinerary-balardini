import Logo from "../logo/Logo";
import NavBar from "./NavBar";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <Logo />
          <NavBar />
        </div>
      </div>
    </header>
  );
}
