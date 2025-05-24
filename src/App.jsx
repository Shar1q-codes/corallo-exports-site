import "./styles/theme.css"; // ✅ correct
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}

export default App;
