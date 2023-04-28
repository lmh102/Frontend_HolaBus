import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import DetailRoute from './DetailRotue';
export default function ShutleBusTable({title,list}) {
  const [isShowDetail,setIsShowDetail] = useState(false);
  const showDetail = () => {
    setIsShowDetail(true);
  }
  const hideDetail = () => {
    setIsShowDetail(false);
  }
  const [busIndex,setBusIndex] = useState(0);
  return (
    <div style={{margin: "5px 100px"}}>
      <strong style={{fontSize:20,color : "#f27328",marginLeft:"3px"}}>From {title}</strong>
      <Table striped bordered hover align='center'>
      <tbody className='text-center' style={{}}>
        {
          list.map((e,index) => {
            return (
            <tr style={{padding:"4px"}}>
              <td onClick={() => {setBusIndex(index); showDetail();}}>
                <h3 style={{fontSize:"17px",color:"blue"}}>
                  {e.LocFrom}-{e.LocTo}_{e.depTime}
                </h3>
              </td>
              <td>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                   {e.listLoc.map((loc,index) => {return (<h3 style={{fontSize:"15px"}}>{loc.locName} {(index === e.listLoc.length-1)? " " : " -> "} </h3>)})}
                </div>
              </td>
              <td>
                <h4 style={{fontSize:15,textDecoration:"underline",color:"blue"}} onClick={() => {setBusIndex(index); showDetail();}}>
                    Details
                </h4>
              </td>
            </tr>)
          })
        }
      </tbody>
    </Table>
      <DetailRoute isShow = {isShowDetail} showDetail = {showDetail} hideDetail = {hideDetail} info = {list[busIndex]} type ="SHUTLE_BUS"/>
    </div>
  )
}
