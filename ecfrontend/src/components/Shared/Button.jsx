import React from 'react'

const Button = ({text, bgColor, textColor, handler=() => {} }) => {
  return (
    <button className={`${bgColor} ${textColor} cursor-pointer hover:scale-110 duration-300 py-2 px-8 rounded-md relative `}>
        {text}
    </button>
  )
}

export default Button