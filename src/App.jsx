import router from "./router";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import userActions from "./redux/actions/userActions";
import "/App.css";

const { signInToken } = userActions;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(signInToken());
    }
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
