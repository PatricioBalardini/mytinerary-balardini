import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./layouts/NavLayaout";
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetails";
import NotFounPage from "./pages/NotFounPage";
import Cities from "./pages/Cities";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <CityDetails /> },
      { path: "/*", element: <NotFounPage /> },
    ],
  },
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        path: "/nav/layout",
        element: <Home />,
      },
    ],
  },
]);

export default router;
