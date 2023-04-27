import React from "react";
import { Link } from "react-router-dom";
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle'
import PersonCircleIcon from '@atlaskit/icon/glyph/person-circle'
import styled from "styled-components";
export default function Header() {
  const styleNavItem = {
    fontSize:17,opacity:0.9,fontStyle:"revert-layer",textShadow:"initial",color:"#7f7e79"
  }
  const QuestionCircleIconStyled = styled(QuestionCircleIcon)`
  color:"red";
  `
  return (
    <>
      <ul className="nav nav-tabs" style={{borderBottomColor : '#f78700',alignItems:"center"}}>
        <li className="nav-item col-lg-8" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/FPT_Software_logo.svg/1200px-FPT_Software_logo.svg.png" alt="FPT software Logo" class = "img-rounded" style={{width : 140}}/>
        </li>
        <li className="nav-item" style={styleNavItem}>
        <Link to={"MyRequest"} className="nav-link"><strong style={{color:"#7f7e79"}}>My Requests</strong></Link>
        </li>
        <li className="nav-item dropdown" style={styleNavItem}>
        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
        <strong style={{color:"#7f7e79"}}>Request Bus</strong>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{color:"#7f7e79"}}>
          <Link style={{color:"#7f7e79"}} className="dropdown-item" to={"RequestRouteBus"}>
          <strong style={{color:"#7f7e79"}}>Request Route Bus</strong>
            </Link>
          <Link className="dropdown-item" to={"RequestOverTimeBus"}><strong style={{color:"#7f7e79"}}>Request Overtime Bus</strong></Link>
        </div>
      </li>
        <li className="nav-item dropdown" style={styleNavItem}>
        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
        <strong style={{color:"#7f7e79"}}>List</strong>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" to={"ListRouteBus"} color="#fff"><strong style={{color:"#7f7e79"}}>List Route Bus</strong></Link>
          <Link className="dropdown-item nav-link" to={"ListShuttleBus"}><strong style={{color:"#7f7e79"}}>List Shuttle Bus</strong></Link>
        </div>
      </li>
      <li className="nav-item" style={styleNavItem}>
        <Link to={"questionAbout"} className="nav-link" color="#7f7e79"> <QuestionCircleIconStyled primaryColor="#7f7e79"/> </Link>
      </li>
      <li className="nav-item dropdown" style={styleNavItem}>
        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
          <PersonCircleIcon primaryColor="#7f7e79"/>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" to={"MyProfile"}><strong style={{color:"#7f7e79"}}>View Profile</strong></Link>
          <Link className="dropdown-item nav-link" to={"/Login"}><strong style={{color:"#7f7e79"}}>Logout</strong></Link>
        </div>
      </li>
      </ul>
    </>
  );
}
