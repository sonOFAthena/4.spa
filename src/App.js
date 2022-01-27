import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Infantil from "./Pages/Infantil";
import Peliculas from "./Pages/Peliculas";
import Series from "./Pages/Series";
import Signup from "./Pages/Signup";
import Tv from "./Pages/Tv";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/series" element={<Series />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/infantil" element={<Infantil />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
