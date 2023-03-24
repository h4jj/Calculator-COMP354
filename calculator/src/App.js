import { useEffect, useState, useRef } from 'react';
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
  const inputRef = useRef(null)

  useEffect(() => {

    if(accumulator === null) {
      setAccumulator(value)
    }

    switch(operation) {
      case "+":
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
    <>
      <h1
        style={{
          backgroundColor: '#DEE1EF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          height: '10vh',
          color: '#3D3F4A'
        }}
      >
        ETERNITY - Team E
      </h1>
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
              id="output-text"
              ref={inputRef}
              style={{
                margin: 0,
                paddingLeft: '20px',
                fontSize: '20px'
              }}
            >
              {value}
            </p>
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
            <InputButton setValue={setValue} setOperation={setOperation} operation={operation} value={value} inputRef={inputRef} text={"PWR"} />
            <InputButton setValue={setValue} setOperation={setOperation} operation={operation} value={value} text={"STD"} />
            <InputButton setValue={setValue} setOperation={setOperation} operation={operation} value={value} text={"LOG"} />
            <InputButton setValue={setValue} setOperation={setOperation} operation={operation} value={value} text={"MEAN"} />
            <InputButton setValue={setValue} setOperation={setOperation} operation={operation} value={value} text={"SINH"} />
            <InputButton setValue={setValue} text={"-"} />
            <InputButton setValue={setValue} text={"-"} />
            <InputButton setValue={setValue} text={"-"} />
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
              <InputButton setValue={setValue} operation={operation} text={1} />
              <InputButton setValue={setValue} operation={operation} text={2} />
              <InputButton setValue={setValue} operation={operation} text={3} />
              <InputButton setValue={setValue} operation={operation} text={4} />
              <InputButton setValue={setValue} operation={operation} text={5} />
              <InputButton setValue={setValue} operation={operation} text={6} />
              <InputButton setValue={setValue} operation={operation} text={7} />
              <InputButton setValue={setValue} operation={operation} text={8} />
              <InputButton setValue={setValue} operation={operation} text={9} />
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: 'repeat(3, 1fr)',
                rowGap: '10px'
              }}
            >  
              <InputButton setOperation={setOperation} operation={operation} value={value} text={"+"} />
              <InputButton setOperation={setOperation} operation={operation} value={value} text={"-"} />
              <InputButton setOperation={setOperation} operation={operation} value={value} text={"/"} />
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
              <InputButton setValue={setValue} setAccumulator={setAccumulator} setOperation={setOperation} inputRef={inputRef} text={"CLR"} />
              <InputButton setValue={setValue} accumulator={accumulator} setOperation={setOperation} operation={operation} text={"="} />
              <InputButton setOperation={setOperation} value={value} operation={operation} text={"x"} />
            </div>
          </div>
        <div>

          </div>
      
        </div>
      </div>
    </>
  );
}

export default App;
