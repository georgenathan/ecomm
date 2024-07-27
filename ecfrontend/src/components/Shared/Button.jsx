import React from 'react'

const Button = ({text, bgColor, textColor, handler=() => {} }) => {
  return (
    <button className={`${bgColor} ${textColor} cursor-pointer hover:scale-150 duration-300 py-2 px-8 rounded-full relative `}>
        {text}
    </button>
  )
}

export default Button