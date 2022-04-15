import React from 'react'
import './../App.css'
const Bar = ({len,width}) => {
  return (
    <div className='bar' style={{height:`${len}px`,width:`${width}px`}}></div>
  )
}

export default Bar