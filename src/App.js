import "./App.scss";
import { Link, Routes, Route } from 'react-router-dom';
import Main from "./Main";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Trans I.D.</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={ <Main /> } /> 
        <Route path="/about" element={ <About /> } /> 
      </Routes>
      <hr />
      <footer>
        <p>
          Developed and maintained by <a href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Teagle</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
