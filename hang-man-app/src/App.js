import "./App.css";
import WordGuess from "./WordGuess";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/guesstheword" element={<WordGuess />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
