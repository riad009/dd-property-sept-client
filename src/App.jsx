import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Container from "./shared/Container";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
