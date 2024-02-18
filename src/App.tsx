import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./contexts/theme.context";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <Layout children={<Home />} />
    </ThemeProvider>
  );
}
