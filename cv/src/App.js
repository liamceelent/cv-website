
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
import StyleSheet from './components/StyleSheet';
import InLine from './components/InLine';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragementDemo from './components/FragementDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

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
      {/* <StyleSheet primary = {true}></StyleSheet> */}
      {/* <InLine></InLine> */}
      {/* <h1 className='error'> error</h1>
      <h1 className={styles.success}> success</h1> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA> h</LifeCycleA> */}
      {/* <FragementDemo></FragementDemo> */}
      {/* <Table></Table> */}
      {/* <PureComp></PureComp> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <PortalDemo></PortalDemo> */}
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
