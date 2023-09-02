import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Form() {
  const mail = useRef();
  const password = useRef();

  async function handleSignIn() {
    let data = {
      mail: mail.current.value,
      password: password.current.value,
    };
    console.log(data);
  }

  return (
    <form>
      <input
        ref={mail}
        type="text"
        name="mail"
        id="mail"
        placeholder="Type Mail"
      ></input>
      <input
        ref={password}
        type="password"
        name="password"
        id="password"
        placeholder="Type Password"
      ></input>
      <input type="button" value="Sign In" onClick={handleSignIn}></input>
      <p>
        Don t you have an account?
        <Link to="/auth/signup">Sign Up</Link>
      </p>
    </form>
  );
}
