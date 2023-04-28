
import React from 'react'
import { Button,Modal} from 'react-bootstrap'
import map from "../assets/images/map.png"
import Image from '@atlaskit/image'
export default function DetailRoute({type,isShow,showDetail,hideDetail,info}) {

  return (
    <div>
         <Modal
        show={isShow}
        onHide={hideDetail}
        backdrop="static"
        keyboard={false}
        size='lg'
        style={{marginTop:"5vh"}}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center' style={{fontWeight:"bold",color:"#f27328"}}>Bus Route Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid'>
            <div>
                <h6>Bus Route</h6>
                <input type='text' value = {info.LocFrom+"-"+info.LocTo+"_"+info.depTime} readOnly 
                style={{opacity:"0.9",width: "100%",backgroundColor:"#f2f2f2",borderWidth:"1px",borderColor:"black",borderRadius:"5px",padding:"5px",marginLeft:"5px"}}/>
            </div>
            <div style={{marginTop:"5px"}}>
                <h6>Bus Type</h6>
                <input type='text' value = {type} readOnly 
                style={{opacity:"0.9",width: "100%",backgroundColor:"#f2f2f2",borderWidth:"1px",borderColor:"black",borderRadius:"5px",padding:"5px",marginLeft:"5px"}}/>
            </div>
            <div style={{marginTop:"5px"}}>
                <h6>Pickup Location</h6>
                {
                  info.listLoc.map((loc,index) => {
                    if(index === info.listLoc.length -1) return <div></div>
                    return(
                      <div>
                        <input type='text' value = {loc.locName} readOnly 
                        style={{opacity:"0.9",width: "48%",backgroundColor:"#f2f2f2",borderWidth:"1px",borderColor:"black",borderRadius:"5px",padding:"5px",marginLeft:"5px"}}/>
                         <input type='text' value = {loc.time} readOnly 
                        style={{opacity:"0.9",width: "48%",backgroundColor:"#f2f2f2",borderWidth:"1px",borderColor:"black",borderRadius:"5px",padding:"5px",marginLeft:"20px",marginBottom:"15px"}}/>
                      </div>
                    )
                  })
                }
                
            </div>
            <div style={{marginTop:"5px"}}>
                <h6>Destination</h6> 
                      <div>
                        <input type='text' value = {info.listLoc[info.listLoc.length-1].locName} readOnly 
                        style={{opacity:"0.9",width: "48%",backgroundColor:"#f2f2f2",borderWidth:"1px",borderColor:"black",borderRadius:"5px",padding:"5px",marginLeft:"5px"}}/>
                         <input type='text' value = {info.listLoc[info.listLoc.length-1].time} readOnly 
                        style={{opacity:"0.9",width: "48%",backgroundColor:"#f2f2f2",borderWidth:"1px",borderColor:"black",borderRadius:"5px",padding:"5px",marginLeft:"20px",marginBottom:"15px"}}/>
                      </div>
            </div>
            <h6 style={{fontWeight:"revert-layer",fontStyle:"italic",color:"blue",textDecoration:"underline"}}>Note: if you cannot see the map, please press Ctrl+F5</h6>
            <Image alt='gg map' src={map}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideDetail}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
