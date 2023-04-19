import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './screens/login';
import ChooseAction from './screens/admin/ChooseAction';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
          <Route path='/login' element = {<Login/>}>
          </Route>
          <Route paht='/' element = {<ChooseAction/>}>
          </Route>
        </Routes>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
