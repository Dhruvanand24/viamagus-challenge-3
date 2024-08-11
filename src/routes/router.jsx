import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
