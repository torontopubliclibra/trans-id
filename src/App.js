import "./App.scss";
import { Link, Routes, Route } from 'react-router-dom';
import Guide from "./Guide";
import About from "./About";
import Links from "./Links";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Trans I.D.</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Guide</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={ <Guide /> } /> 
        <Route path="/about" element={ <About /> } /> 
        <Route path="/links" element={ <Links /> } /> 
      </Routes>
      <footer>
        <p>
          Developed and maintained by <a href="https://danateagle.com" target="_blank" rel="noreferrer">Dana Teagle</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
