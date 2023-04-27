import React from 'react'
import Image from '@atlaskit/image';
import styled, { css } from 'styled-components';
import  "./css/actionitem.css"
export default function ActionItem({src,ActionName}) {
    const containerStyles = css({
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      });
  return (
    
    <>
        <div className='container-fluid img-Action' style={{height : "80%", justifyContent : "center", alignItems : "center"}}>
            <Image src={src} alt= {ActionName} testId="image" css = {containerStyles}></Image>
        </div>
        <div style={{marginTop : 20,height : "20%",display : 'flex',alignItems : "flex-start",justifyContent:"center"}}>
            <p style={{fontSize : 18,fontWeight:'bold',fontStyle:"none"}}>{ActionName}</p>
        </div>
    </>
  )
}
