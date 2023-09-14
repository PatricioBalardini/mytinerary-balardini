import { useRef, useEffect, useState } from "react";
//import Users from "../components/user/User";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import "./sign-up.scss";

const { readUsers } = userActions;

export default function SignUp() {
  const navigate = useNavigate();

  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch, reload]);

  async function handleSignUp(evt) {
    evt.preventDefault();
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      if (photo.current.value) {
        data.photo = photo.current.value;
      }
      await axios.post(`${apiUrl}/auth/register`, data);

      setReload(!reload);

      navigate("/sign-in");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="sign-up-wrapper">
      <form onSubmit={handleSignUp} className="sign-up">
        <h2>Sign Up</h2>
        <input
          ref={name}
          type="text"
          className=""
          name="name"
          id="name"
          defaultValue=""
          placeholder="Name"
        />
        <input
          ref={lastName}
          type="text"
          className=""
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Last Name"
        />
        <input
          ref={country}
          type="text"
          className=""
          name="country"
          id="country"
          defaultValue=""
          placeholder="Country"
        />
        <input
          ref={photo}
          type="text"
          className=""
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Photo"
        />
        <input
          ref={mail}
          type="text"
          className=""
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          className=""
          name="password"
          id="password"
          defaultValue=""
          placeholder="Password"
        />
        <PrimaryButton label="Sign Up" type="submit" />
        <p>
          Already have an account?{" "}
          <Link className="" to="/sign-in">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
