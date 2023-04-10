export const formatPower = () => {
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

export const formatAbx = () => {
  let largePlaceholderOne = document.createElement('span')
  largePlaceholderOne.innerText = "a "
  largePlaceholderOne.id = "pwr-large-one"
  
  let largePlaceholderTwo = document.createElement('span')
  largePlaceholderTwo.innerText = "b"
  largePlaceholderTwo.id = "pwr-large-two"

  let smallPlaceholder = document.createElement('span')
  smallPlaceholder.id = "pwr-small"
  smallPlaceholder.innerText = "x"

  smallPlaceholder.style.fontSize = '12px'
  smallPlaceholder.style.position = 'absolute'
  smallPlaceholder.style.paddingLeft = '4px'
  smallPlaceholder.style.color = '#949494'

  largePlaceholderOne.style.color = '#949494'
  largePlaceholderTwo.style.color = '#949494'

  document.getElementById('output-text').appendChild(largePlaceholderOne)
  document.getElementById('output-text').appendChild(largePlaceholderTwo)
  document.getElementById('output-text').appendChild(smallPlaceholder)
  
}

export const formatSinh = () => {
  let leftPlaceholder = document.createElement('span')
  leftPlaceholder.innerText = "sinh("
  leftPlaceholder.style.color = '#949494'
  leftPlaceholder.id = "sinh-left"

  let rightPlaceholder = document.createElement('span')
  rightPlaceholder.innerText = ")"
  rightPlaceholder.style.color = '#949494'
  rightPlaceholder.id = "sinh-right"


  let numberPlaceholder = document.createElement('span')
  numberPlaceholder.innerText = "x"
  numberPlaceholder.style.color = '#949494'
  numberPlaceholder.id = "sinh-number"


  document.getElementById('output-text').appendChild(leftPlaceholder)
  document.getElementById('output-text').appendChild(numberPlaceholder)
  document.getElementById('output-text').appendChild(rightPlaceholder)
}

export const formatArccos = () => {
  let leftPlaceholder = document.createElement('span')
  leftPlaceholder.innerText = "arccos("
  leftPlaceholder.style.color = '#949494'
  leftPlaceholder.id = "arccos-left"

  let rightPlaceholder = document.createElement('span')
  rightPlaceholder.innerText = ")"
  rightPlaceholder.style.color = '#949494'
  rightPlaceholder.id = "arccos-right"


  let numberPlaceholder = document.createElement('span')
  numberPlaceholder.innerText = "x"
  numberPlaceholder.style.color = '#949494'
  numberPlaceholder.id = "arccos-number"


  document.getElementById('output-text').appendChild(leftPlaceholder)
  document.getElementById('output-text').appendChild(numberPlaceholder)
  document.getElementById('output-text').appendChild(rightPlaceholder)
}

export const formatLog = () => {
  let leftPlaceholder = document.createElement('span')
  leftPlaceholder.innerText = "log("
  leftPlaceholder.style.color = '#949494'
  leftPlaceholder.id = "log-left"

  let rightPlaceholder = document.createElement('span')
  rightPlaceholder.innerText = ")"
  rightPlaceholder.style.color = '#949494'
  rightPlaceholder.id = "log-right"


  let numberPlaceholderOne = document.createElement('span')
  numberPlaceholderOne.innerText = "base"
  numberPlaceholderOne.style.color = '#949494'
  numberPlaceholderOne.id = "log-base"

  let comma = document.createElement('span')
  comma.innerText = ", "
  comma.style.color = '#949494'
  comma.id = "log-comma"

  let numberPlaceholderTwo = document.createElement('span')
  numberPlaceholderTwo.innerText = "number"
  numberPlaceholderTwo.style.color = '#949494'
  numberPlaceholderTwo.id = "log-number"


  document.getElementById('output-text').appendChild(leftPlaceholder)
  document.getElementById('output-text').appendChild(numberPlaceholderOne)
  document.getElementById('output-text').appendChild(comma)
  document.getElementById('output-text').appendChild(numberPlaceholderTwo)
  document.getElementById('output-text').appendChild(rightPlaceholder)
}

export const formatStd = () => {
  let leftPlaceholder = document.createElement('span')
  leftPlaceholder.innerText = "std(["
  leftPlaceholder.style.color = '#949494'
  leftPlaceholder.id = "std-left"

  let rightPlaceholder = document.createElement('span')
  rightPlaceholder.innerText = "])"
  rightPlaceholder.style.color = '#949494'
  rightPlaceholder.id = "std-right"

  let stdNumberString = document.createElement('span')
  stdNumberString.id = "std-numbers"
  stdNumberString.innerText = "..."
  stdNumberString.style.color = '#949494'

  document.getElementById('output-text').appendChild(leftPlaceholder)
  document.getElementById('output-text').appendChild(stdNumberString)
  document.getElementById('output-text').appendChild(rightPlaceholder)
}

export const formatMad = () => {
  let leftPlaceholder = document.createElement('span')
  leftPlaceholder.innerText = "mad(["
  leftPlaceholder.style.color = '#949494'
  leftPlaceholder.id = "mad-left"

  let rightPlaceholder = document.createElement('span')
  rightPlaceholder.innerText = "])"
  rightPlaceholder.style.color = '#949494'
  rightPlaceholder.id = "mad-right"

  let stdNumberString = document.createElement('span')
  stdNumberString.id = "mad-numbers"
  stdNumberString.innerText = "..."
  stdNumberString.style.color = '#949494'

  document.getElementById('output-text').appendChild(leftPlaceholder)
  document.getElementById('output-text').appendChild(stdNumberString)
  document.getElementById('output-text').appendChild(rightPlaceholder)

}

export const formatSqrt = () => {
  let leftPlaceholder = document.createElement('span')
  leftPlaceholder.innerText = "sqrt("
  leftPlaceholder.style.color = '#949494'
  leftPlaceholder.id = "sqrt-left"

  let rightPlaceholder = document.createElement('span')
  rightPlaceholder.innerText = ")"
  rightPlaceholder.style.color = '#949494'
  rightPlaceholder.id = "sqrt-right"


  let numberPlaceholder = document.createElement('span')
  numberPlaceholder.innerText = "x"
  numberPlaceholder.style.color = '#949494'
  numberPlaceholder.id = "sqrt-number"


  document.getElementById('output-text').appendChild(leftPlaceholder)
  document.getElementById('output-text').appendChild(numberPlaceholder)
  document.getElementById('output-text').appendChild(rightPlaceholder)
}
