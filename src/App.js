import './App.css';
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  let updateCount = (value) => setCount(value);

  return (
    <div className="App">
      <div>Rahul here</div>
      <button onClick={() => updateCount(count + 1)}>Hit me!</button>
      <Child counter={count} updateCounter={updateCount}/>
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <button onClick={() => props.updateCounter(props.counter + 1)}>Hit me!</button>
      <div>{props.counter}</div>
    </div>
  );
}



export default App;
