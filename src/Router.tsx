import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default router;
