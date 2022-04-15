import React from 'react'
import './../App.css'
const Bar = ({len}) => {
  return (
    <div className='bar' style={{height:`${len}px`}}></div>
  )
}

export default Bar