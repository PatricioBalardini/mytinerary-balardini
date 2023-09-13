import { useSelector } from "react-redux";

export default function Users() {
  //const store = useSelector(store=> store)
  //console.log(store);
  //const user_reducer = useSelector(store => store.users)
  //console.log(user_reducer);
  const userState = useSelector((store) => store.users.users);
  //console.log(user_state);
  return (
    <div className="">
      {userState?.map((each) => (
        <img src={each.photo} key={each._id} className="" />
      ))}
    </div>
  );
}
