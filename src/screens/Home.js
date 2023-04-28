
import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import styled from 'styled-components';

export default function Home() {
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