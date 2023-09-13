import { useRef, useEffect, useState } from "react";
//import Users from "../components/user/User";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

const { readUsers } = userActions;

export default function SignUp() {
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
  async function handleSignUp() {
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="">
      <form className="">
        <h1 className="">Sign Up!</h1>
        <input
          ref={name}
          type="text"
          className=""
          name="name"
          id="name"
          defaultValue=""
          placeholder="Type Name"
        />
        <input
          ref={lastName}
          type="text"
          className=""
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Type Last Name"
        />
        <input
          ref={country}
          type="text"
          className=""
          name="country"
          id="country"
          defaultValue=""
          placeholder="Type Country"
        />
        <input
          ref={photo}
          type="text"
          className=""
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Type Photo"
        />
        <input
          ref={mail}
          type="text"
          className=""
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Type Mail"
        />
        <input
          ref={password}
          type="password"
          className=""
          name="password"
          id="password"
          defaultValue=""
          placeholder="Type Password"
        />
        <input
          type="button"
          className=""
          value="Sign Up!"
          onClick={handleSignUp}
        />
        <p>
          Already have an account?{" "}
          <Link className="" to="/sign-in">
            Sign in!
          </Link>
        </p>
      </form>
    </div>
  );
}
