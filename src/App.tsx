import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/theme.context";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
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
