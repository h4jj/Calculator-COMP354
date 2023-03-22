import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import optionsLogo from './assets/options.svg'
import InputButton from './components/inputButton';


function App() {
  
  const [value, setValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [accumulator, setAccumulator] = useState(null)
  const TOTAL_INPUT_BUTTONS = 30

  useEffect(() => {

    if(accumulator === null) {
      setAccumulator(value)
    }

    switch(operation) {
      case "+":
        console.debug("value: ", value)
        setAccumulator((prev) => prev + value)
        break;
      case "-":
        setAccumulator((prev) => prev - value)
        break;
      case "/":
        setAccumulator((prev) => prev / value)
        break;
      case "x":
        setAccumulator((prev) => prev * value)
        break;
        

    }
  }, [value])

  return (
    <div className="App">
      <ToastContainer
        autoClose={3000}
      />
      <div className="calculator-container">
        <div className="header">
          <p
            style={{fontWeight: 700}}
          >
            ETERNITY
          </p>
        </div>

        <div 
          className="display-container dark"
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            alignItems: 'center'
          }}
        >
          <p
            style={{
              margin: 0,
              paddingLeft: '20px',
              fontSize: '20px'
            }}
          >
            {value}
          </p>
          <p>{operation !== null ? `Mode: ${operation}` : ''}</p>
        </div>
        <div className="upper-container">
          <div className="light operations">
            <p>
              Operations
            </p>
            <img src={optionsLogo} />
          </div>
          <div className="btn light show-graph">
            <p>Show Graph</p>
          </div>
        </div>
        <div 
          className='more-operations'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            width: '100%',
            columnGap: '10px',
            rowGap: '10px'
          }}
        >
          <InputButton setValue={setValue} text={"cos"} />
          <InputButton setValue={setValue} text={"e"} />
          <InputButton setValue={setValue} text={"ln"} />
          <InputButton setValue={setValue} text={"log"} />
          <InputButton setValue={setValue} text={"sin"} />
          <InputButton setValue={setValue} text={"tan"} />
          <InputButton setValue={setValue} text={"arctan"} />
          <InputButton setValue={setValue} text={"cot"} />
        </div>
        <div className='lower-container'>
          <div 
            className='number-keypad'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              columnGap: '10px',
              rowGap: '10px'
            }}
          >
            <InputButton setValue={setValue} text={1} />
            <InputButton setValue={setValue} text={2} />
            <InputButton setValue={setValue} text={3} />
            <InputButton setValue={setValue} text={4} />
            <InputButton setValue={setValue} text={5} />
            <InputButton setValue={setValue} text={6} />
            <InputButton setValue={setValue} text={7} />
            <InputButton setValue={setValue} text={8} />
            <InputButton setValue={setValue} text={9} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(3, 1fr)',
              rowGap: '10px'
            }}
          >  
            <InputButton setOperation={setOperation} value={value} text={"+"} />
            <InputButton setOperation={setOperation} value={value} text={"-"} />
            <InputButton setOperation={setOperation} value={value} text={"/"} />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.9fr 1fr',
              columnGap: '10px',
              gridRow: '2 / 3',
              gridColumn: '1 / 3'
            }}
          >
            <InputButton setValue={setValue} setAccumulator={setAccumulator} setOperation={setOperation} text={"CLR"} />
            <InputButton setValue={setValue} accumulator={accumulator} text={"="} />
            <InputButton setOperation={setOperation} value={value} text={"x"} />
          </div>
        </div>
      <div>

        </div>
     
      </div>
    </div>
  );
}

export default App;
