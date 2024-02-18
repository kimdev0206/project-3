import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

export default function App() {
  return <Layout children={<Home />} />;
}
