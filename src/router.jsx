import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./layouts/NavLayaout";
import Home from "./pages/Home";
import CityDatails from "./pages/CityDatails";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NotFounPage from "./pages/NotFounPage";
import Login from "./pages/Login";
import Cities from "./pages/Cities";
import FormSignUp from "./pages/FormSignUp";
import FormSignIn from "./pages/FormSignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <CityDatails /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-out", element: <SignOut /> },
      { path: "/login", element: <Login /> },
      { path: "/auth/signup", element: <FormSignUp /> },
      { path: "/auth/signin", element: <FormSignIn /> },
      { path: "/*", element: <NotFounPage /> },
    ],
  },
]);

export default router;
