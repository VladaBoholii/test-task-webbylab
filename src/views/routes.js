import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "./pages/Main";
import AddPage from "./pages/AddPage";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      { path: "add-movie", element: <AddPage /> },
      {path: 'search', element: <Search/>}
    ],
  },
]);

export default router;
