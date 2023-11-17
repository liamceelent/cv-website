
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';

function App() {
  return (
    <div className="App">
      {/* <Greet name = "bruce" size ="tall">
        <p> this is cool</p>
      </Greet>
      <Greet name = "tim" size ="small">
      <p> this is sick</p>
      </Greet>
      <Greet name = "john" size ="meduim">
      <button> this is </button>
      </Greet>
      <Welcome name = "john" size ="meduim"/> */}
      <Message></Message>
    </div>
  );
}

export default App;
