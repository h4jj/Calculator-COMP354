import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import {power, mad, std, sinh, arccos, abx, log, sqrt} from '../../functions';
import {formatPower, formatSinh, formatArccos, formatMad, formatStd, formatLog, formatAbx, formatSqrt} from '../../functionFormatting';
import './index.css'

const InputButton = ({
    text, 
    operation,
    setEvaluationString,
    evaluationString,
    setValue,
    setOperation,
    setAnswer,
    answer,
    nextForComplex,
    setNextForComplex
  }) => {

  const [number, setNumber] = useState(text)
  const basicArithmetic = ["x", "/", "+", "-"]
  const complexFunctions = ["PWR", "LOG", "STD", "MAD", "SINH", "ARCCOS", "ABX", "SQRT"]
  const [buttonStyle, setButtonStyle] = useState({});

  const clearInput = () => {

    setNextForComplex({
      PWR: {base: false, exponent: false},
      ABX: {baseOne: false, baseTwo: false, exponent: false},
      LOG: {base: false, number: false},
      STD: {number: false},
      MAD: {number: false},
    })

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
        const result = "" + eval(evaluationString)
        setAnswer(result)
        setEvaluationString(result)
      }
      catch (e) {
        toast("Invalid input")
      }
    }

    
  }

  const evaluateComplexOperation = () => {
    switch(operation) {
      case "PWR":
        try {
          let base = document.getElementById('pwr-large').innerText
          let exponent = document.getElementById('pwr-small').innerText
          let resultPwr = ""
  
          if((Number(base) || base === '0') && (Number(exponent) || exponent === '0')) {
            try {
              resultPwr = power(base, exponent)
              setAnswer(resultPwr)
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
        }
        catch (e) {
          console.log(e)
        }
        break;   
      case "ABX":
        let baseOne = document.getElementById('pwr-large-one').innerText
        let baseTwo = document.getElementById('pwr-large-two').innerText
        let exponentOne = document.getElementById('pwr-small').innerText

        let resultAbx = ""

        if((Number(baseOne) || baseOne === '0') && (Number(baseTwo) || baseTwo === '0') && (Number(exponentOne) || exponentOne === '0')) {
          try {
            resultAbx = abx(baseOne, baseTwo, exponentOne)
            setAnswer(resultAbx)
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
            setAnswer(resultSinh)
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
            setAnswer(resultArc)
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
              setAnswer(resultLog)
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
        
        let resultStd = ""

        try {
          let numberString = document.getElementById('std-numbers').innerText
          numberString = numberString.split(',')
          let stdNumberArray = numberString.map(item => (parseInt(item)))

          try {
            resultStd = std(stdNumberArray)
            setAnswer(resultStd)
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
        let resultMad = ""
        
        try {
          let madString = document.getElementById('mad-numbers').innerText
          madString = madString.split(',')
          let madNumberArray = madString.map(item => (parseInt(item)))

          try {
            resultMad = mad(madNumberArray)
            setAnswer(resultMad)
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
            setAnswer(resultSqrt)
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

    if(text === 'ANS') {
      text = answer
    }

    switch(operation) {
      case "PWR":
        let largePlaceholder = document.getElementById('pwr-large')
        let smallPlaceholder = document.getElementById('pwr-small')
        
        if((Number(text) || text === '0' || text === '.') && !nextForComplex.PWR.base) {
          largePlaceholder.style.color = '#DEE1EF'
          if(largePlaceholder.innerText === 'X') {
            largePlaceholder.innerText = text
          }
          else {
            largePlaceholder.innerText += text
          }
        }
        else if((Number(text) || text === '0' || text === '.') && !nextForComplex.PWR.exponent) {
          smallPlaceholder.style.color = '#DEE1EF'
          if(smallPlaceholder.innerText === 'Y') {
            smallPlaceholder.innerText = text
          }
          else {
            smallPlaceholder.innerText += text
          }
        }
        else if(!(Number(text) || text === '0')) {
          toast("Input must be a number")
        }
        break;     
      case "ABX":
        let largePlaceholderOne = document.getElementById('pwr-large-one')
        let largePlaceholderTwo = document.getElementById('pwr-large-two')
        let smallPlaceholderOne = document.getElementById('pwr-small')
        
        if((Number(text) || text === '0' || text === '.') && !nextForComplex.ABX.baseOne) {
          largePlaceholderOne.style.color = '#DEE1EF'
          if(largePlaceholderOne.innerText === 'a ') {
            largePlaceholderOne.innerText = `${text} `
          }
          else {
            let currentText = largePlaceholderOne.innerText.trim()
            currentText += text
            largePlaceholderOne.innerText = `${currentText} `
          }
        }
        else if((Number(text) || text === '0' || text === '.') && !nextForComplex.ABX.baseTwo) {
          largePlaceholderTwo.style.color = '#DEE1EF'
          if(largePlaceholderTwo.innerText === 'b') {
            largePlaceholderTwo.innerText = text
          }
          else {
            largePlaceholderTwo.innerText += text
          }
        }
        else if((Number(text) || text === '0' || text === '.') && !nextForComplex.ABX.exponent) {
          smallPlaceholderOne.style.color = '#DEE1EF'
          if(smallPlaceholderOne.innerText === 'x') {
            smallPlaceholderOne.innerText = text
          }
          else {
            smallPlaceholderOne.innerText += text
          }
        }
        else if(!(Number(text) || text === '0')) {
          toast("Input must be a number")
        }
        break;  

      case "SINH":
        if(Number(text) || text === '0' || text === '.') {
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

        let leftPlaceholder = document.getElementById('log-left')
        let rightPlaceholder = document.getElementById('log-right')
        let logNumber = document.getElementById('log-number')
        let logBase = document.getElementById('log-base')
        let logComma = document.getElementById('log-comma')

        if((Number(text) || text === '0' || text === '.') && !nextForComplex.LOG.base) {
          if(logBase.innerText === 'base') {
            logBase.style.color = '#DEE1EF'
            rightPlaceholder.style.color = '#DEE1EF'
            leftPlaceholder.style.color = '#DEE1EF'
            logComma.style.color = '#DEE1EF'
            logBase.innerText = text
          }
          else {
            logBase.innerText += text
          }
        }
        else if((Number(text) || text === '0' || text === '.') && !nextForComplex.LOG.number) {
          if(logNumber.innerText === 'number') {
            logNumber.style.color = '#DEE1EF'
            logNumber.innerText = text
          }
          else {
            logNumber.innerText += text
          }
        }
        else {
          toast("press clear to perform other operations")
        }
        break;

      case "STD":
        let stdNumberString = document.getElementById('std-numbers')
        let numberString = stdNumberString.innerText
        setNextForComplex(prev => ({...prev, STD: {...prev.STD, number: false}}))

        if(Number(text) || text === '0' || text === '.') {
          
          document.getElementById('std-left').style.color = '#DEE1EF'
          document.getElementById('std-right').style.color = '#DEE1EF'
          document.getElementById('std-numbers').style.color = '#DEE1EF'

          if(stdNumberString.innerText === '...') {
            numberString = text
          }
          else {
            numberString += `${text}`
          }
          
        }
        stdNumberString.innerText = numberString
        break;

      case "MAD":
        let madNumberString = document.getElementById('mad-numbers')
        let madString = madNumberString.innerText
        setNextForComplex(prev => ({...prev, MAD: {...prev.MAD, number: false}}))

        if(Number(text) || text === '0' || text === '.') {
          
          document.getElementById('mad-left').style.color = '#DEE1EF'
          document.getElementById('mad-right').style.color = '#DEE1EF'
          document.getElementById('mad-numbers').style.color = '#DEE1EF'

          if(madNumberString.innerText === '...') {
            madString = text
          }
          else {
            madString += `${text}`
          }
          
        }
        madNumberString.innerText = madString
        break;
      
      case "SQRT":
        if(Number(text) || text === '0' || text === '.') {
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

    setButtonStyle({
      boxShadow: '0 0 5px #999'
    });

    setTimeout(() => {
      setButtonStyle({});
    }, 200);

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
          toast("Issue occured, press CLR")
        }
      }

    }
    else if(text === "=") {
      displayResults()
    }
    else if(text === "Next") {
      switch(operation) {
        case "PWR":
          if(!nextForComplex.PWR.base) {
            setNextForComplex(prev => ({...prev, PWR: {...prev.PWR, base: true}}))
            
          }
          else if(!nextForComplex.PWR.exponent) {
            setNextForComplex(prev => ({...prev, PWR: {...prev.PWR, exponent: true}}))
          }
          break
        case "ABX":
          if(!nextForComplex.ABX.baseOne) {
            setNextForComplex(prev => ({...prev, ABX: {...prev.ABX, baseOne: true}}))
          }
          else if(!nextForComplex.ABX.baseTwo) {
            setNextForComplex(prev => ({...prev, ABX: {...prev.ABX, baseTwo: true}}))
          }
          else if(!nextForComplex.ABX.exponent) {
            setNextForComplex(prev => ({...prev, ABX: {...prev.ABX, exponent: true}}))
          }
          break
        case "LOG":
          if(!nextForComplex.LOG.base) {
            setNextForComplex(prev => ({...prev, LOG: {...prev.LOG, base: true}}))
          }
          else if(!nextForComplex.LOG.number) {
            setNextForComplex(prev => ({...prev, LOG: {...prev.LOG, number: true}}))
          }
          break
        case "STD":
          if(!nextForComplex.STD.number) {
            setNextForComplex(prev => ({...prev, STD: {...prev.STD, number: true}}))
            document.getElementById('std-numbers').innerText += ','
          }
          break

        case "MAD":
          if(!nextForComplex.MAD.number) {
            setNextForComplex(prev => ({...prev, MAD: {...prev.MAD, number: true}}))
            document.getElementById('mad-numbers').innerText += ','
          }
          break
        
      }
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
      setEvaluationString(prev => prev + `${text === 'ANS' ? answer : text}`)
    }
  }
    
  return (
    <div 
        onClick={performOperation}
        className='ripple'
        style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: '12px',
            backgroundColor: `${operation === text || Object.keys(buttonStyle).length !== 0 ? '#DEE1EFAA' : '#3D3F4A'}`,
            height: '50px',
            width: '100%',
            cursor: 'pointer',
            boxShadow: `${Object.keys(buttonStyle).length === 0 ? '' : '0 0 5px #999'}`
        }}
    >
        <p 
          style={{
            color: `${operation === text ? '#3D3F4A' : '#DEE1EF'}`, 
            margin: 0
          }}
        >
          {text}
        </p>
    </div>
  )
}

export default InputButton