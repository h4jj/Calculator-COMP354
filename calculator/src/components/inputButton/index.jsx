import { useState } from 'react'
import { toast } from 'react-toastify';
import power from '../../functions/power'
import sinh from '../../functions/sinh'
import mean from '../../functions/mean'
// import log from '../../functions/log'

const InputButton = ({
    text, 
    setValue, 
    accumulator, 
    setOperation, 
    setAccumulator, 
    value, 
    operation, 
    inputRef
  }) => {

  const [number, setNumber] = useState(text)
  const basicArithmetic = ["x", "/", "+", "-"]
  const complexFunctions = ["PWR", "LOG", "STD", "MEAN", "SINH"]

  const displayResults = () => {

    setOperation(null)

    if(complexFunctions.includes(operation)) {
      switch(operation) {
        case "PWR":
          let largePlaceholder = document.getElementById('pwr-large').innerText
          let smallPlaceholder = document.getElementById('pwr-small').innerText
          let result = power(largePlaceholder, smallPlaceholder)
          setOperation(null)
          setValue(result)          
      }
    }
    else {
      console.debug("accumulator: ", accumulator)
      setValue(accumulator)
    }
  }

  const formatPower = () => {
    let largePlaceholder = document.createElement('span')
    largePlaceholder.innerText = "X"
    largePlaceholder.id = "pwr-large"

    let smallPlaceholder = document.createElement('span')
    smallPlaceholder.id = "pwr-small"
    smallPlaceholder.innerText = "Y"

    smallPlaceholder.style.fontSize = '12px'
    smallPlaceholder.style.position = 'absolute'
    smallPlaceholder.style.paddingLeft = '4px'
    smallPlaceholder.style.color = '#949494'

    largePlaceholder.style.color = '#949494'

    document.getElementById('output-text').appendChild(largePlaceholder)
    document.getElementById('output-text').appendChild(smallPlaceholder)
    
  }

  const performSinh = () => {
  }

  const performLog = () => {
  }

  const performStd = () => {
  }

  const performMean = () => {
  }

  const performOperation = () => {

    switch(text) {
      case "CLR":
        inputRef.current.innerHTML = ''
        setValue(null)
        setOperation(null)
        setAccumulator(null)
        return
      case "=": 
        displayResults()
        return
    }

    if(complexFunctions.includes(operation)) {
      switch(operation) {
        case "PWR":
          if(!isNaN(text)) {
            let largePlaceholder = document.getElementById('pwr-large')
            let smallPlaceholder = document.getElementById('pwr-small')
            
            if(isNaN(largePlaceholder.innerText)) {
              largePlaceholder.style.color = '#DEE1EF'
              largePlaceholder.innerText = text
            }
            else if(isNaN(smallPlaceholder.innerText)) {
              smallPlaceholder.style.color = '#DEE1EF'
              smallPlaceholder.innerText = text
            }
            else {
              toast("press equal to display results")
            }
            
          }
          else {
            toast("press clear to perform other operations")
          }

      }
    }
    else {
      if(!isNaN(text)) {
        setValue(text)
      }
      else {
  
        if(basicArithmetic.includes(text)) {
          if(value === null) {
            toast("Must input a number first before selecting operation")
          }
          else {
            setOperation(text)
          }
        }
        else if(complexFunctions.includes(text)) {
          if(value !== null) {
            toast("Must press clear before using complex operations")
          }
          else {
            setOperation(text)
  
            switch(text) {
              case "PWR":
                formatPower()
                break;
              case "LOG":
                performLog()
                break;
              case "STD":
                performStd()
                break;
              case "SINH":
                performSinh()
                break;
              case "MEAN":
                performMean()
                break;
              
            }
          }
        }
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
            backgroundColor: `${operation === text ? '#DEE1EF' : '#3D3F4A'}`,
            height: '50px',
            width: '100%',
            cursor: 'pointer'
        }}
    >
        <p style={{color: `${operation === text ? '#3D3F4A' : '#DEE1EF'}`, margin: 0}}>{text}</p>
    </div>
  )
}

export default InputButton