
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import styled from 'styled-components';
import HeaderAdmin from '../components/HeaderAdmin';

export default function HomeAdmin() {
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