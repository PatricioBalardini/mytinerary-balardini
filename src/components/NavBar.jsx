import { useState } from "react";
import "../styles/navbar.css";

export default function NavBar() {
  let [show, setShow] = useState(false);
  return (
    <div className="menu-hamb">
      <i onClick={() => setShow(!show)} className="fa-solid fa-bars"></i>
      {show ? (
        <div>
          <h5>Home</h5>
          <h5>Sign In</h5>
          <h5>Sign Up</h5>
        </div>
      ) : (null)}
    </div>
  );
}
