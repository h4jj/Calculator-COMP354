import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import {power, mean, std, sinh} from '../../functions';
import {formatPower, formatSinh, formatMean, formatStd, formatLog} from '../../functionFormatting';


const InputButton = ({
    text, 
    operation,
    setEvaluationString,
    evaluationString
  }) => {

  const [number, setNumber] = useState(text)
  const basicArithmetic = ["x", "/", "+", "-"]
  const complexFunctions = ["PWR", "LOG", "STD", "MEAN", "SINH"]

  const clearInput = () => {
    setEvaluationString('')
  }


  const displayResults = () => {

    if(complexFunctions.includes(operation)) {
      evaluateComplexOperation()
    }
    else {
      try {
        setEvaluationString(eval(evaluationString))
      }
      catch (e) {
        toast("Invalid input")
      }
    }
  }

  const evaluateComplexOperation = () => {
    switch(operation) {
      case "PWR":
        let base = document.getElementById('pwr-large').innerText
        let exponent = document.getElementById('pwr-small').innerText

        if(Number(base) && Number(exponent)) {
          let result = power(base, exponent)
          // setValue(result)
        }
        else {
          toast("Missing input number")
        }
        break;
      
      case "SINH":
        let inputNumber = Number(document.getElementById('sinh-number').innerText)

        if(inputNumber) {
          let result = sinh(inputNumber)
          // setValue(result)
        }
        else {
          toast("Missing input number")
        }
        break;
    }
  }

  const performComplexOperation = () => {
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
          break;
          
        }
        else {
          toast("press clear to perform other operations")
          break;
        }
      case "SINH":
        if(Number(text)) {
          let leftPlaceholder = document.getElementById('sinh-left')
          let rightPlaceholder = document.getElementById('sinh-right')
          let numberPlaceholder = document.getElementById('sinh-number')
          
          if(numberPlaceholder.innerText === 'x') {
            numberPlaceholder.style.color = '#DEE1EF'
            rightPlaceholder.style.color = '#DEE1EF'
            leftPlaceholder.style.color = '#DEE1EF'
            numberPlaceholder.innerText = text
          }
          else {
            numberPlaceholder.innerText += text
          }

          break;
          
        }
        else {
          toast("press clear to perform other operations")
          break;
        }
    }
  }

  const formatComplexOperation = () => {
    // setOperation(text)
    // document.getElementById('output-text').innerHTML = ''

    switch(text) {
      case "PWR":
        formatPower()
        break;
      case "SINH":
        formatSinh()
        break;
      // case "LOG":
      //   performLog()
      //   break;
      // case "STD":
      //   performStd()
      //   break;
      // case "MEAN":
      //   performMean()
      //   break;
        
    }
  }


  const performOperation = () => {
    if(text === "CLR") {
      clearInput()
    }
    else if(text === "C") {
      if(evaluationString.at(-1) === ' ') {
        setEvaluationString(evaluationString.slice(0, -2))  
      }
      else {
        setEvaluationString(evaluationString.slice(0, -1))
      }
    }
    else if(text === "=") {
      displayResults()
    }
    else if(complexFunctions.includes(text)) {
      formatComplexOperation()    
    }
    else if(complexFunctions.includes(operation)) {
      performComplexOperation()
    }
    else if(basicArithmetic.includes(text)) {
      setEvaluationString(prev => prev + ` ${text} `)
    }
    else { 
      setEvaluationString(prev => prev + text)
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