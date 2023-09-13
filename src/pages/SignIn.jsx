import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import Swal from "sweetalert2";
import PrimaryButton from "../components/buttons/PrimaryButton";

import "./sign-in.scss";

const { signIn } = userActions;

export default function SignIn() {
  const navigate = useNavigate();
  const mailSignIn = useRef("");
  const passwordSignIn = useRef("");
  const dispatch = useDispatch();

  function handleSignIn() {
    let data = {
      mail: mailSignIn.current.value,
      password: passwordSignIn.current.value,
    };
    dispatch(signIn({ data }))
      .then((res) => {
        console.log(res);
        if (res.payload.token) {
          Swal.fire({
            icon: "success",
            title: "Logged in!",
          });
          navigate("/");
        } else if (res.payload.messages.length > 0) {
          let html = res.payload.messages
            .map((each) => `<p>${each}</p>`)
            .join("");
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            html,
          });
        }
      })
      .catch((error) => console.log(error));
  }
  let user = useSelector((store) => store);
  console.log(user);
  return (
    <div className="sign-in-wrapper">
      <form className="sign-in">
        <h2>Sign In</h2>
        <input
          ref={mailSignIn}
          type="text"
          className=""
          name="mailSignIn"
          id="mailSignIn"
          defaultValue=""
          placeholder="Type Mail"
        />
        <input
          ref={passwordSignIn}
          type="password"
          className=""
          name="passwordSignIn"
          id="passwordSignIn"
          defaultValue=""
          placeholder="Type Password"
        />
        <PrimaryButton label="Sign In" onClick={handleSignIn} />
        <p>
          <Link className="" to="/sign-up">
            Sign up!
          </Link>
        </p>
      </form>
    </div>
  );
}
