import React from 'react';
import ActionItem from '../../components/actionItem';
import imgBookRouteBus from '../../assets/images/BookRoutebus.jpg';
import ImageBookOverTimeBus from '../../assets/images/ImageBookOverTimeBus.png';
import BusStation from '../../assets/images/BusStation.png';
import ListBusSecretary from '../../assets/images/ListBusSecretary.png';
import ListShutleBus from '../../assets/images/ListShutleBus.png';
import ListRouteBus from '../../assets/images/ListRouteBus.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
export default function ChooseAction() {
  return (
    <>
    <div class='container-fluid'>
      <div class='row text-center' style={{margin : "0",width : "100vw", height : "20vh",justifyContent:'center'}}>
            <h3 style={{fontWeight : "bold"}}><strong style={{color:"#ff7921"}}>QUICK ACCESS</strong></h3>
      </div>
      <div class='col-12 d-flex' style={{ margin : "0",height : "66vh",justifyContent:"space-between"}}>
          <Link to={"/RequestRouteBus"} class='col-md-2'>
              <ActionItem src={imgBookRouteBus} ActionName={"Book Route Bus"}/>
          </Link>
          <Link to={"/RequestOverTimeBus"} class='col-md-2'>
              <ActionItem src={ImageBookOverTimeBus} ActionName={"Book Overtime Bus"}/>
          </Link>
          <Link to={"/BusStation"} class='col-md-2'>
              <ActionItem src={BusStation} ActionName={"Bus Station"}/>
          </Link>
          <Link to={"ListBusSecretary"}class='col-md-2'>
              <ActionItem src={ListBusSecretary} ActionName={"List Bus Secretary"}/>
          </Link>
          <Link to={"/ListShuttleBus"} class='col-md-2'>
              <ActionItem src={ListShutleBus} ActionName={"List Shuttle Bus"}/>
          </Link>
          <Link to={"/ListRouteBus"} class='col-md-2'>
              <ActionItem src={ListRouteBus} ActionName={"List Route Bus"}/>
          </Link>
      </div>
    </div>
    </>
  )
}
