import React from "react";
import { Link } from "react-router-dom";
import QuestionCircleIcon from '@atlaskit/icon/glyph/question-circle'
import PersonCircleIcon from '@atlaskit/icon/glyph/person-circle'
export default function Header() {
  return (
    <>
      <ul class="nav nav-tabs" style={{borderBottomColor : '#f78700'}}>
        <li class="nav-item" className="col-lg-8" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/FPT_Software_logo.svg/1200px-FPT_Software_logo.svg.png" alt="FPT software Logo" class = "img-rounded" style={{width : 140}}/>
        </li>
        <li class="nav-item" >
        <Link to={"MyRequest"} className="nav-link">My Requests</Link>
        </li>
        <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
          Request Bus
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item nav-link" to={"RequestRouteBus"}>Request Route Bus</Link>
          <Link class="dropdown-item nav-link" to={"RequestOverTimeBus"}>Request Overtime Bus</Link>
        </div>
      </li>
        <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
          List
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item nav-link" to={"ListRouteBus"}>List Route Bus</Link>
          <Link class="dropdown-item nav-link" to={"ListShuttleBus"}>List Shuttle Bus</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link to={"questionAbout"} className="nav-link"> <QuestionCircleIcon/> </Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
          <PersonCircleIcon/>
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item nav-link" to={"MyProfile"}>View Profile</Link>
          <Link class="dropdown-item nav-link" to={"/Login"}>Logout</Link>
        </div>
      </li>
      </ul>
    </>
  );
}
