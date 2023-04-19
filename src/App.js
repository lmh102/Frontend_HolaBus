import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/login';
import ChooseAction from './screens/admin/ChooseAction';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/login' element = {<Login/>}>
          </Route>
          <Route paht='/' element = {<ChooseAction/>}>
          </Route>
        </Routes>
    </Router>

  );
}

export default App;
