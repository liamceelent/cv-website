
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
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
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComp></ParentComp> */}
      {/* <UserGreeting></UserGreeting> */}
      <NameList></NameList>
    </div>
  );
}

export default App;
