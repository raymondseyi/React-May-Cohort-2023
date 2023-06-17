import React from 'react'

const MyButton = ({title,color,tryMe}) => {
    
  return (
    <>
        <button onClick={()=>tryMe(1)} className={color}>{title}</button>  
    </>
  )
}

export default MyButton