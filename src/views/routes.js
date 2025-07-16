import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddForm from "./components/AddForm";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      { path: "add", element: <AddForm /> },
    ],
  },
]);

export default router;
