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

  export const formatLog = () => {
  }

  export const formatStd = () => {
  }

  export const formatMean = () => {
  }

