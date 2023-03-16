import './App.css'
import optionsLogo from './assets/options.svg'
import InputButton from './components/inputButton';


function App() {

  const TOTAL_INPUT_BUTTONS = 30

  return (
    <div className="App">
      <div className="calculator-container">
        <div className="header">
          <img />
          <p>Calculator</p>
        </div>

        <div className="display-container dark">

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
        <div className='lower-container'>
          <InputButton text={"1"} />
          <InputButton text={"2"} />
          <InputButton text={"3"} />
          <InputButton text={"4"} />
          <InputButton text={"5"} />
          <InputButton text={"1"} />
          <InputButton text={"2"} />
          <InputButton text={"3"} />
          <InputButton text={"4"} />
          <InputButton text={"5"} />
          <InputButton text={"1"} />
          <InputButton text={"2"} />
          <InputButton text={"3"} />
          <InputButton text={"4"} />
          <InputButton text={"5"} />
          <InputButton text={"1"} />
          <InputButton text={"2"} />
          <InputButton text={"3"} />
          <InputButton text={"4"} />
          <InputButton text={"5"} />
          <InputButton text={"1"} />
          <InputButton text={"2"} />
          <InputButton text={"3"} />
          <InputButton text={"4"} />
          <InputButton text={"5"} />
        </div>
        <div>

        </div>
     
      </div>
    </div>
  );
}

export default App;
