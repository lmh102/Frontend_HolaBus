import React from "react";
import { Link } from "react-router-dom";
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle'
import PersonCircleIcon from '@atlaskit/icon/glyph/person-circle'
import styled from "styled-components";
export default function HeaderAdmin() {
  const styleNavItem = {
    fontSize:17,opacity:0.9,fontStyle:"revert-layer",textShadow:"initial",color:"#7f7e79"
  }
  const QuestionCircleIconStyled = styled(QuestionCircleIcon)`
  color:"red";
  `
  return (
    <>
      <ul className="nav nav-tabs" style={{borderBottomColor : '#f78700',alignItems:"center"}}>
        <li className="nav-item col-lg-7" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/FPT_Software_logo.svg/1200px-FPT_Software_logo.svg.png" alt="FPT software Logo" className = "img-rounded" style={{width : 140}}/>
        </li>
        <li className="nav-item" style={styleNavItem}>
        <Link to={"AllRequest"} className="nav-link"><strong style={{color:"#7f7e79"}}>List Requests</strong></Link>
        </li>
        <li className="nav-item" style={styleNavItem}>
        <Link to={"RequestManagement"} className="nav-link"><strong style={{color:"#7f7e79"}}>Requirements</strong></Link>
        </li>
        <li className="nav-item" style={styleNavItem}>
        <Link to={"UserManagement"} className="nav-link"><strong style={{color:"#7f7e79"}}>List User</strong></Link>
        </li>
        <li className="nav-item" style={styleNavItem}>
        <Link to={"BusRouteManagement"} className="nav-link"><strong style={{color:"#7f7e79"}}>Bus Route</strong></Link>
        </li>
      <li className="nav-item" style={styleNavItem}>
        <Link to={"questionAbout"} className="nav-link" color="#7f7e79"> <QuestionCircleIconStyled primaryColor="#7f7e79"/> </Link>
      </li>
      <li className="nav-item dropdown" style={styleNavItem}>
        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
          <PersonCircleIcon primaryColor="#7f7e79"/>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" to={"Profile"}><strong style={{color:"#7f7e79"}}>View Profile</strong></Link>
          <Link className="dropdown-item nav-link" to={"/Login"}><strong style={{color:"#7f7e79"}}>Logout</strong></Link>
        </div>
      </li>
      </ul>
    </>
  );
}
