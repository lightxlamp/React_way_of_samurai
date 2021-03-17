import logo from './logo.svg';
import './App.css';
import StasTest from './StasTest';

function App() {
  return (
    // <div>Can't return more than 1 node</div> // Adjacent JSX elements must be wrapped in an enclosing tag.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey
        </p>
        {/* <a>  SyntaxError: my-react-app/src/App.js: Expected corresponding JSX closing tag for <a> (26:6)*/}
        <a
          class="testWarning" // Warning: Invalid DOM property `class`. Did you mean `className`? 
          // at a
          // at header
          // at div
          // at App
          className="App-link" // we are not in HTML, so write className not just class
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel">
          What is "rel" attribute 
        </a>
        <ul>
          <li>JS</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <StasTest></StasTest>
      </header>
    </div>
  );
}

export default App;
