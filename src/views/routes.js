import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddForm from "./components/AddForm";
import Main from "./pages/Main";
import AddPage from "./pages/AddPage";

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
    ],
  },
]);

export default router;
