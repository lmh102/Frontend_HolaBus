
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import styled from 'styled-components';
import HeaderAdmin from '../components/HeaderAdmin';

export default function HomeAdmin() {
  const navigate = useNavigate();
   useEffect(()=>{
       var role =  JSON.parse(localStorage.getItem('role'));
       if(role != "ROLE_ADMIN") {
        
        if(role == "ROLE_USER") navigate("/");
        else navigate("/login");
       }
    },[])
  const OutletStyle = styled(Outlet)`
  min-height: "100vh";
  `;
  return (
    <div>
        <HeaderAdmin/>
        <OutletStyle/>
        <Footer/>
    </div>
  )
}