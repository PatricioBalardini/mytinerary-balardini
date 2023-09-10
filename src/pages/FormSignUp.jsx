import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link } from "react-router-dom";

export default function Form() {
  
  const name = useRef();
  const lastName = useRef();
  const country = useRef();
  const photo = useRef();
  const mail = useRef();
  const password = useRef();

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(apiUrl + "/users/signup", data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form>
      <input
        ref={name}
        type="text"
        name="name"
        id="name"
        placeholder="Type Name"
      ></input>
      <input
        ref={lastName}
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Type Last Name"
      ></input>
      <input
        ref={country}
        type="text"
        name="country"
        id="country"
        placeholder="Type Country"
      ></input>
      <input
        ref={photo}
        type="text"
        name="photo"
        id="photo"
        placeholder="Type Photo"
      ></input>
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
      <input type="button" value="Sign Up" onClick={handleSignUp}></input>
      <p>
        Already have an account?
        <Link to="/auth/signin">Sign In</Link>
      </p>
    </form>
  );
}
