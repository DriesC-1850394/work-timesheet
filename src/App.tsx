import { useState } from 'react';
import './App.css';

function App() {
  const [index, setIndex] = useState<number>(0)
  const [names, setNames] = useState<Array<string>>([])
  const [textAreaText, setTextAreaText] = useState<string>("")

  return (
    <div className="App">
      <div className="Title">Worksheet Generator</div>
      {index === 0 &&
        <div className="FirstStep">
          <div className="StepText">ENTER NAMES</div>
          <textarea name="description" placeholder='enter names...' onChange={e => setTextAreaText(e.target.value)} />
          <button className="NextStepButton" onClick={() => enter()}>Next</button>
        </div>
      }
    </div>
  );


  function enter() {

  }
}

export default App;
