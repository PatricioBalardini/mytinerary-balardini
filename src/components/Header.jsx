import Title from "./Title";
import Home from "./Home";
import Cities from "./Cities";
import Login from "./Login";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <Title />
      <div className="header">
        <Home />
        <Cities />
        <Login />
      </div>
    </header>
  );
}
