import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import {power, mad, std, sinh, arccos, abx, log, sqrt} from '../../functions';
import {formatPower, formatSinh, formatArccos, formatMad, formatStd, formatLog, formatAbx, formatSqrt} from '../../functionFormatting';


const InputButton = ({
    text, 
    operation,
    setEvaluationString,
    evaluationString,
    setValue,
    setOperation
  }) => {

  const [number, setNumber] = useState(text)
  const basicArithmetic = ["x", "/", "+", "-"]
  const complexFunctions = ["PWR", "LOG", "STD", "MAD", "SINH", "ARCCOS", "ABX", "SQRT"]

  const clearInput = () => {
    setEvaluationString('')
    
    if(operation !== '') {
      setOperation('')
      document.getElementById('output-text').innerHTML = ''
    }
    
  }

  const displayResults = () => {

    if(complexFunctions.includes(operation)) {
      evaluateComplexOperation()
    }
    else {
      try {
        setEvaluationString("" + eval(evaluationString))
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
        let resultPwr = ""

        if((Number(base) || base === '0') && (Number(exponent) || exponent === '0')) {
          try {
            resultPwr = power(base, exponent)
          }
          catch (e) {
            toast(e)
          }
        }
        else {
          toast("Invalid input")
        }
        setEvaluationString(prev => prev + ` ${resultPwr} `)
        setOperation('')
        break;   
      case "ABX":
        let baseOne = document.getElementById('pwr-large-one').innerText
        let baseTwo = document.getElementById('pwr-large-two').innerText
        let exponentOne = document.getElementById('pwr-small').innerText
        let resultAbx = ""

        if((Number(baseOne) || baseOne === '0') && (Number(baseTwo) || baseTwo === '0') && (Number(exponentOne) || exponentOne === '0')) {
          try {
            resultAbx = abx(baseOne, baseTwo, exponentOne)
          }
          catch (e) {
            toast(e)
          }
        }
        else {
          toast("Invalid input")
        }
        setEvaluationString(prev => prev + ` ${resultAbx} `)
        setOperation('')
        break;      
      case "SINH":
        let inputNumber = document.getElementById('sinh-number').innerText
        let resultSinh = ""

        if(Number(inputNumber)) {
          try {
            resultSinh = sinh(Number(inputNumber))
          }
          catch(e) {
            toast(e)
          }
        }
        else {
          toast("Missing input number")
        }
        setEvaluationString(prev => prev + ` ${resultSinh} `)
        setOperation('')
        break;
      case "ARCCOS":
        let inputNumberArc = document.getElementById('arccos-number').innerText
        let resultArc = ""

        if(Number(inputNumberArc)) {
          try {
            resultArc = arccos(Number(inputNumberArc))
          } 
          catch (e) {
            toast(e)
          }
        }
        else {
          toast("Missing input number")
        }
        setEvaluationString(prev => prev + ` ${resultArc} `)
        setOperation('')
        break;

      case "LOG":
        let logBase = document.getElementById('log-base').innerText
        let logNumber = document.getElementById('log-number').innerText
        let resultLog = ""

        if(logBase === '0' || Number(logBase)) {
          if(logNumber === '0' || Number(logNumber)) {
            try {
              resultLog = log(logBase, logNumber)
            }    
            catch(e) {
              toast(e)
            }
          }
        }
        
        setEvaluationString(prev => prev + ` ${resultLog} `)
        setOperation('')
        break;

      case "STD":
        let numberString = document.getElementById('std-numbers').innerText
        let resultStd = ""
        
        try {
          numberString = numberString.split(',')
          let stdNumberArray = numberString.map(item => (parseInt(item)))

          try {
            resultStd = std(stdNumberArray)
          }
          catch(e) {
            toast(e)
          }
        }
        catch(e) {
          toast("Invalid input")
        }

        setEvaluationString(prev => prev + ` ${resultStd} `)
        setOperation('')
        break;

      case "MAD":
        let madString = document.getElementById('mad-numbers').innerText
        let resultMad = ""
        
        try {
          madString = madString.split(',')
          let madNumberArray = madString.map(item => (parseInt(item)))

          try {
            resultMad = mad(madNumberArray)
          }
          catch(e) {
            toast(e)
          }
        }
        catch(e) {
          toast("Invalid input")
        }

        setEvaluationString(prev => prev + ` ${resultMad} `)
        setOperation('')
        break;
      
      case "SQRT":
        let sqrtInput = document.getElementById('sqrt-number').innerText
        let resultSqrt = ""

        if(Number(sqrtInput)) {
          try {
            resultSqrt = sqrt(Number(sqrtInput))
          }
          catch(e) {
            toast(e)
          }
        }
        else {
          toast("Missing input number")
        }
        setEvaluationString(prev => prev + ` ${resultSqrt} `)
        setOperation('')
        break;
    }
  }

  const performComplexOperation = () => {
    switch(operation) {
      case "PWR":
        let largePlaceholder = document.getElementById('pwr-large')
        let smallPlaceholder = document.getElementById('pwr-small')
        
        if((Number(text) || text === '0') && !(Number(largePlaceholder.innerText) || largePlaceholder.innerText === '0')) {
          largePlaceholder.style.color = '#DEE1EF'
          largePlaceholder.innerText = text
        }
        else if((Number(text) || text === '0') && !(Number(smallPlaceholder.innerText) || smallPlaceholder.innerText === '0')) {
          smallPlaceholder.style.color = '#DEE1EF'
          smallPlaceholder.innerText = text
        }
        else if(!(Number(text) || text === '0')) {
          toast("Input must be a number")
        }
        break;     
      case "ABX":
        let largePlaceholderOne = document.getElementById('pwr-large-one')
        let largePlaceholderTwo = document.getElementById('pwr-large-two')
        let smallPlaceholderOne = document.getElementById('pwr-small')
        
        if((Number(text) || text === '0') && !(Number(largePlaceholderOne.innerText) || largePlaceholderOne.innerText === '0')) {
          largePlaceholderOne.style.color = '#DEE1EF'
          largePlaceholderOne.innerText = text
        }
        else if((Number(text) || text === '0') && !(Number(largePlaceholderTwo.innerText) || largePlaceholderTwo.innerText === '0')) {
          largePlaceholderTwo.style.color = '#DEE1EF'
          largePlaceholderTwo.innerText = text
        }
        else if((Number(text) || text === '0') && !(Number(smallPlaceholderOne.innerText) || smallPlaceholderOne.innerText === '0')) {
          smallPlaceholderOne.style.color = '#DEE1EF'
          smallPlaceholderOne.innerText = text
        }
        else if(!(Number(text) || text === '0')) {
          toast("Input must be a number")
        }
        break;  

      case "SINH":
        if(Number(text) || text === '0') {
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
        }
        else {
          toast("press clear to perform other operations")
        }
        break;
      case "ARCCOS":
        if(Number(text) || text === "0" || text === ".") {
          let leftPlaceholder = document.getElementById('arccos-left')
          let rightPlaceholder = document.getElementById('arccos-right')
          let numberPlaceholder = document.getElementById('arccos-number')
          
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

      case "LOG":
        if(Number(text) || text === '0') {
          let leftPlaceholder = document.getElementById('log-left')
          let rightPlaceholder = document.getElementById('log-right')
          let logNumber = document.getElementById('log-number')
          let logBase = document.getElementById('log-base')
          let logComma = document.getElementById('log-comma')

          
          if(logBase.innerText === 'base') {
            logBase.style.color = '#DEE1EF'
            rightPlaceholder.style.color = '#DEE1EF'
            leftPlaceholder.style.color = '#DEE1EF'
            logComma.style.color = '#DEE1EF'
            logBase.innerText = text
          }
          else if(logNumber.innerText === 'number') {
            logNumber.style.color = '#DEE1EF'
            logNumber.innerText = text
          }
        }
        else {
          toast("press clear to perform other operations")
        }
        break;

      case "STD":
        let stdNumberString = document.getElementById('std-numbers')
        let numberString = stdNumberString.innerText
        if(Number(text) || text === '0') {
          
          document.getElementById('std-left').style.color = '#DEE1EF'
          document.getElementById('std-right').style.color = '#DEE1EF'
          document.getElementById('std-numbers').style.color = '#DEE1EF'

          if(stdNumberString.innerText === '...') {
            numberString = text
          }
          else {
            numberString += `,${text}`
          }
          
        }
        stdNumberString.innerText = numberString
        break;

      case "MAD":
        let madNumberString = document.getElementById('mad-numbers')
        let madString = madNumberString.innerText
        if(Number(text) || text === '0') {
          
          document.getElementById('mad-left').style.color = '#DEE1EF'
          document.getElementById('mad-right').style.color = '#DEE1EF'
          document.getElementById('mad-numbers').style.color = '#DEE1EF'

          if(madNumberString.innerText === '...') {
            madString = text
          }
          else {
            madString += `,${text}`
          }
          
        }
        madNumberString.innerText = madString
        break;
      
      case "SQRT":
        if(Number(text) || text === '0') {
          let leftPlaceholder = document.getElementById('sqrt-left')
          let rightPlaceholder = document.getElementById('sqrt-right')
          let numberPlaceholder = document.getElementById('sqrt-number')
          
          if(numberPlaceholder.innerText === 'x') {
            numberPlaceholder.style.color = '#DEE1EF'
            rightPlaceholder.style.color = '#DEE1EF'
            leftPlaceholder.style.color = '#DEE1EF'
            numberPlaceholder.innerText = text
          }
          else {
            numberPlaceholder.innerText += text
          }
        }
        else {
          toast("press clear to perform other operations")
        }
        break;
    }
  }

  const formatComplexOperation = () => {
    setOperation(text)
    document.getElementById('output-text').innerHTML = ''

    switch(text) {
      case "PWR":
        formatPower()
        break;
      case "ABX":
        formatAbx()
        break;
      case "SINH":
        formatSinh()
        break;
      case "ARCCOS":
        formatArccos()
        break;
      case "LOG":
        formatLog()
        break;
      case "STD":
        formatStd()
        break;
      case "MAD":
        formatMad()
        break;
      case "SQRT":
        formatSqrt()
        break;
        
    }
  }


  const performOperation = () => {
    if(text === "CLR") {
      clearInput()
    }
    else if(text === "C") {
      
      if(complexFunctions.includes(operation)) {

      }
      else {
        try {
          if(evaluationString.at(-1) === ' ') {
            setEvaluationString(evaluationString.slice(0, -2))  
          }
          else {
            setEvaluationString(evaluationString.slice(0, -1))
          }
        }
        catch(e) {
          console.log(typeof evaluationString)
          toast("Issue occured, press CLR")
        }
      }

    }
    else if(text === "=") {
      displayResults()
    }
    else if(basicArithmetic.includes(text)) {
      if(operation !== '') {
        evaluateComplexOperation()
      }
      setEvaluationString(prev => prev + ` ${text === 'x' ? '*' : text} `)
    }
    else if(complexFunctions.includes(text)) {
      formatComplexOperation()    
    }
    else if(complexFunctions.includes(operation)) {
      performComplexOperation()
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
        <p style={{
          color: `${operation === text ? '#3D3F4A' : '#DEE1EF'}`, 
          margin: 0
        }}>
          {text}
        </p>
    </div>
  )
}

export default InputButton