
import React, { useEffect } from 'react';
import Header from '../components/header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import styled from 'styled-components';

export default function Home() {
    const navigate = useNavigate();
   useEffect(()=>{
       var role =  JSON.parse(localStorage.getItem('role'));
       if(role != "ROLE_USER") {
        if(role == "ROLE_ADMIN") navigate("/admin");
        else navigate("/login");
       }
    },[])
  const OutletStyle = styled(Outlet)`
  min-height: "100vh";
  `;
  return (
    <div>
        <Header/>
        <OutletStyle/>
        <Footer/>
    </div>
  )
}