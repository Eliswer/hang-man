import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Choose a word</h1>
      <input></input>
      <li>
        <Link to="/guesstheword">Continue</Link>
      </li>
    </>
  );
}

export default Home;
