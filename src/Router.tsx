import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Login from "./Login";
import Mypage from "./Mypage";
import Signup from "./Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
