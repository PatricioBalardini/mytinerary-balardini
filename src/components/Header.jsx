import Title from "./Title";
import Login from "./Login";
import ButtonsNav from "./ButtonsNav";
import NavBar from "./NavBar";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <Title />
      <div className="header">
        <ButtonsNav />
        <Login />
        <NavBar />
      </div>
    </header>
  );
}
