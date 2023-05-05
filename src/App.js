import React from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from "./screens/login/index";
import Home from "./screens/Home";
import ChooseAction from "./screens/user/ChooseAction";
import ListShuttleBus from "./screens/user/ListShuttleBus";
import ListRouteBus from "./screens/user/ListRouteBus";
import MyProfile from "./screens/user/MyProfile";
import MyRequest from "./screens/user/MyRequest";
import RequestRouteBus from "./screens/user/RequestRouteBus";
import RequestOverTimeBus from "./screens/user/RequestOverTimeBus";
import NotFound from './screens/NotFound';
import ListBusSecretary from './screens/user/ListBusSecretary';
import BusStation from './screens/user/BusStation';
import RequestManagement from './screens/admin/RequestManagement';
import UserManagement from './screens/admin/UserManagement';
import BusRouteManagement from './screens/admin/BusRouteManagement';
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
          <Route path='/login' element = {<LoginForm/>}>
          </Route>
          <Route path='/' element = {<Home/>}>
              <Route index element= {<ChooseAction/>}></Route>
              <Route path="ListShuttleBus" element= {<ListShuttleBus/>}></Route>
              <Route path="ListRouteBus" element= {<ListRouteBus/>}></Route>
              <Route path="MyProfile" element= {<MyProfile/>}></Route>
              <Route path="MyRequest" element= {<MyRequest/>}></Route>
              <Route path="RequestRouteBus" element= {<RequestRouteBus/>}></Route>
              <Route path="RequestOverTimeBus" element= {<RequestOverTimeBus/>}></Route>
              <Route path="ListBusSecretary" element= {<ListBusSecretary/>}></Route>
              <Route path="BusStation" element= {<BusStation/>}></Route>
              <Route path="RequestManagement" element= {<RequestManagement/>}></Route>
              <Route path="UserManagement" element= {<UserManagement/>}></Route>
              <Route path="BusRouteManagement" element= {<BusRouteManagement/>}></Route>
          </Route> 
          <Route path='*' element = {<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
    
}

export default App;
