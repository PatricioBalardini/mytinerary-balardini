import { createBrowserRouter } from "react-router-dom";
import NavLayout from "./layouts/NavLayaout";
import Home from "./pages/Home";
import CityDatails from "./pages/CityDatails";
import SignIn from "./pages/SignIn";
import NotFounPage from "./pages/NotFounPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/city/:city_id", element: <CityDatails /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/*", element: <NotFounPage /> },


    ],
  },
]);

export default router;
