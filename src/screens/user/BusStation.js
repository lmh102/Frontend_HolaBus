import React from 'react'
import BusStation_Fvile1 from '../../assets/images/BusStation_Fvile1.jpg';

export default function BusStation() {
  return (
    <div style={{height:"90vh"}}>
      <strong style={{color:"#7f7e79",fontSize:"23px",margin:"20px 5px 30px 10px"}}>Bus Station</strong>
      <hr />
      <div style={{margin:"15px 0 20px 25px"}}> Bus station diagram: Fvile 17h30 </div>
        <p style={styles}>
           <img src={BusStation_Fvile1} alt="Fvile1_BusStation_17h30" /> 
        </p>     
      <hr />    
    </div>
    
  )
}
const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
};
