import { createHashRouter, RouterProvider } from "react-router-dom";
import Common from "./components/common";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/theme.context";
import Book from "./pages/Book";
import Books from "./pages/Books";
import CartBooks from "./pages/CartBooks";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";

const routes = [
  {
    path: "/books/:bookID",
    element: <Book />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/cart-books",
    element: <CartBooks />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Common.Error />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/users/sign-up",
    element: <SignUp />,
  },
  {
    path: "/users/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/users/log-in",
    element: <LogIn />,
  },
];

const router = createHashRouter(
  routes.map((route) => {
    return {
      ...route,
      element: <Layout>{route.element}</Layout>,
    };
  })
);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
