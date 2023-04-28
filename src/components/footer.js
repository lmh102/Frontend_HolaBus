import React from "react"
import "./css/footer.css"
import { BsFillBusFrontFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className='legal'>
        
     <div style={{marginBottom:"30px"}}>
      <BsFillBusFrontFill size={20}/>
      <h3 style={{fontSize:"30",fontWeight:"bolder"}}>Bus Manegement</h3>
     </div>
        <p>
          Copyright Â©2023 Made by Group 1 LabIA
        </p>
      </div>
    </>
  )
}

export default Footer
