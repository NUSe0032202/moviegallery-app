import "./App.css";
import MovieDisplay from "./Display/MovieDisplay";
import Navigation from "./Navbar/Navigation";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation></Navigation>
        <div className="spacer"></div>
        <MovieDisplay></MovieDisplay>
      </Container>
    </div>
  );
}

export default App;
