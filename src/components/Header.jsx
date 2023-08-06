import Title from "./Title";
import Login from "./Login";
import ButtonsNav from "./ButtonsNav";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <Title />
      <div className="header">
        <ButtonsNav />
        <Login />
      </div>
    </header>
  );
}
