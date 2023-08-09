import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./layouts/NavLayaout";
import Home from "./pages/Home";
// import Cities from "./pages/Cities";
import CityDatails from "./pages/CityDatails";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NotFounPage from "./pages/NotFounPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cities", element: <NotFounPage /> },
      { path: "/city/:city_id", element: <CityDatails /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-out", element: <SignOut /> },
      { path: "/*", element: <NotFounPage /> },
    ],
  },
]);

export default router;
