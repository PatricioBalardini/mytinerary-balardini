import { useRef, useState } from "react";
import UserData from "../components/user-data/UserData";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
const { updateUser } = userActions;

export default function Profile() {
  const user = useSelector((store) => store.users.user);
  //console.log(user);
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const password = useRef("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  async function handleUpdate() {
    try {
      let data = {};
      if (name.current.value) {
        data.name = name.current.value;
      }
      if (lastName.current.value) {
        data.lastName = lastName.current.value;
      }
      if (country.current.value) {
        data.country = country.current.value;
      }
      if (photo.current.value) {
        data.photo = photo.current.value;
      }
      if (password.current.value) {
        data.password = password.current.value;
      }
      //console.log(data);
      dispatch(updateUser({ data }));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="">
      <UserData user={user} show={show} setShow={setShow} />
      {show && (
        <form className="">
          <h1 className="">Update!</h1>
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
            value="Update!"
            onClick={handleUpdate}
          />
        </form>
      )}
    </div>
  );
}
