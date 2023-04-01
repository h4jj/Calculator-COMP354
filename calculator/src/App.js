import { useEffect, useState, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import InputButton from './components/inputButton';


function App() {
  
  const [value, setValue] = useState('')
  const [evaluationString, setEvaluationString] = useState('')
  const [operation, setOperation] = useState('')

  const numberPad = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const complexFunctionsButtons = ['PWR','ABX', 'ARCCOS', 'SINH', 'LOG','SQRT', 'STD', 'MAD']
  const arithmeticButtons = ['+', '-', '/']

  useEffect(() => {
    setValue(evaluationString)
  }, [evaluationString])

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
              alignItems: 'center',
              whiteSpace: 'nowrap',
              overflowX: 'scroll'
            }}
          >
            <p
              id="output-text"
              style={{
                margin: 0,
                padding: '0 15px',
                fontSize: '20px',
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
            {complexFunctionsButtons.map((item, index) => (
              <InputButton setEvaluationString={setEvaluationString} setValue={setValue} operation={operation} setOperation={setOperation} evaluationString={evaluationString} text={item} key={index} />
            ))}
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
              {numberPad.map((item, index) => (
                <InputButton setEvaluationString={setEvaluationString} operation={operation} evaluationString={evaluationString} text={item} key={index} />
              ))}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: 'repeat(3, 1fr)',
                rowGap: '10px'
              }}
            >  
              {arithmeticButtons.map((item, index) => (
                <InputButton setEvaluationString={setEvaluationString} operation={operation} setOperation={setOperation} evaluationString={evaluationString} text={item} key={index} />
              ))}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                columnGap: '10px',
                gridRow: '2 / 3',
                gridColumn: '1 / 3'
              }}
            >
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gridColumn: '1 / 3',
                columnGap: '10px'
              }}
            >
              <InputButton setEvaluationString={setEvaluationString} evaluationString={evaluationString} operation={operation} text={"0"} />
              <InputButton setEvaluationString={setEvaluationString} evaluationString={evaluationString} operation={operation} text={"00"} />
              <InputButton setEvaluationString={setEvaluationString} operation={operation} text={"."} />
              <InputButton setEvaluationString={setEvaluationString} operation={operation} setOperation={setOperation} evaluationString={evaluationString} text={"x"} />
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 2fr',
                gridColumn: '1 / 3',
                columnGap: '10px'
              }}
            >
              <InputButton setEvaluationString={setEvaluationString} setOperation={setOperation} operation={operation} text={"CLR"} />
              <InputButton setEvaluationString={setEvaluationString} evaluationString={evaluationString} setOperation={setOperation} text={"C"} />
              <InputButton setEvaluationString={setEvaluationString} evaluationString={evaluationString} operation={operation} setOperation={setOperation} text={"="} />
            </div>
          </div>
      </div>
    </div>
  </>
  );
}

export default App;
