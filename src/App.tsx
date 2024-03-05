import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/books/:bookID",
    element: (
      <Layout>
        <Book />
      </Layout>
    ),
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: "/cart-books",
    element: (
      <Layout>
        <CartBooks />
      </Layout>
    ),
  },
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Common.Error />,
  },
  {
    path: "/order",
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
  },
  {
    path: "/orders",
    element: (
      <Layout>
        <Orders />
      </Layout>
    ),
  },
  {
    path: "/users/sign-up",
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
  {
    path: "/users/reset-password",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: "/users/log-in",
    element: (
      <Layout>
        <LogIn />
      </Layout>
    ),
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
