import logo from "./3809-hero-92552284.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img className="image" src={logo} />
        <ul>
          <li>
            <a href="\">Home</a>
          </li>
          <li>
            <a href="\">News</a>
          </li>
          <li>
            <a href="\">About</a>
          </li>
          <li>
            <a href="\">Contact</a>
          </li>
        </ul>
      </header>
      <body>
        <h1 className="title">Hello, I'm Nicholas Wang.</h1>
        <h2>Hobbies:</h2>
        <ul className="flex-container">
          <li>
            Video Games
          </li>
          <li>
            Badminton
          </li>
          <li>
            Programming
          </li>
        </ul>
      </body>
    </div>
  );
}

export default App;
