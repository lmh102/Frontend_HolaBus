import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './screens/login';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
      navigate('/login');
  },[])
  return (
    <></>
  );
    
}

export default App;
