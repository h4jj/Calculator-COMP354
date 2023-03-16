import React from 'react'

const InputButton = ({text, light}) => {
  return (
    <div 
        style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: '12px',
            backgroundColor: `${light ? '#5A5D6C' : '#3D3F4A'}`,
            height: '50px',
            width: '100%'
        }}
    >
        <p style={{color: '#DEE1EF', margin: 0}}>{text}</p>
    </div>
  )
}

export default InputButton