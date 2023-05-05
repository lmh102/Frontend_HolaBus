import React from 'react';
import ActionItem from '../../components/actionItem';
import imgBookRouteBus from '../../assets/images/BookRoutebus.jpg';
import ImageBookOverTimeBus from '../../assets/images/ImageBookOverTimeBus.png';
import BusStation from '../../assets/images/BusStation.png';
import ListBusSecretary from '../../assets/images/ListBusSecretary.png';
import { Link } from 'react-router-dom';
export default function AdminChooseAction() {
  return (
    <>
    <div class='container-fluid'>
      <div class='row text-center' style={{margin : "0",width : "100vw", height : "20vh",justifyContent:'center'}}>
            <h3 style={{fontWeight : "bold"}}><strong style={{color:"#ff7921"}}>QUICK ACCESS</strong></h3>
      </div>
      <div class='col-12 d-flex' style={{ margin : "0",height : "66vh",justifyContent:"space-between"}}>
          <Link to={"UserManagement"} class='col-md-3'>
              <ActionItem src={imgBookRouteBus} ActionName={"List User"}/>
          </Link>
          <Link to={"RequestManagement"} class='col-md-3'>
              <ActionItem src={ImageBookOverTimeBus} ActionName={"Requirements"}/>
          </Link>
          <Link to={"AllRequest"} class='col-md-3'>
              <ActionItem src={BusStation} ActionName={"List Request"}/>
          </Link>
          <Link to={"BusRouteManagement"}class='col-md-3'>
              <ActionItem src={ListBusSecretary} ActionName={"Bus Route"}/>
          </Link>
      </div>
    </div>
    </>
  )
}
