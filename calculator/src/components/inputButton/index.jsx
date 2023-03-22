import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';


const InputButton = ({text, light, setValue, accumulator, setOperation, setAccumulator, value}) => {

  const [number, setNumber] = useState(text)
  const basicArithmetic = ["x", "/", "+", "-"]

  const performOperation = () => {

    if(!isNaN(text)) {
      setValue(text)
    }
    else if(basicArithmetic.includes(text)) {
      if(value === null) {
        toast("Must input a number first before selecting operation")
      }
      else {
        setOperation(text)
      }
    }
    else {
      switch(text) {
        case "CLR":
          setValue(null)
          setOperation(null)
          setAccumulator(null)
          break;
        case "=": 
          console.debug("accumulator: ", accumulator)
          setValue(accumulator)
          break;
      }
    }

  }

  return (
    <div 
        onClick={performOperation}
        style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: '12px',
            backgroundColor: `${light ? '#5A5D6C' : '#3D3F4A'}`,
            height: '50px',
            width: '100%',
            cursor: 'pointer'
        }}
    >
        <p style={{color: '#DEE1EF', margin: 0}}>{text}</p>
    </div>
  )
}

export default InputButton