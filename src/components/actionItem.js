import React from 'react'
import Image from '@atlaskit/image';
import { css } from 'styled-components';
export default function ActionItem({src,ActionName}) {
    const containerStyles = css({
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      });
  return (
    
    <>
        <div className='container-fluid' style={{height : "80%", justifyContent : "center", alignItems : "center"}}>
            <Image src={src} alt= {ActionName} testId="image" css = {containerStyles}></Image>
        </div>
        <div style={{marginTop : 20,height : "20%",display : 'flex',alignItems : "flex-start",justifyContent:"center"}}>
            <p style={{fontSize : 18,fontWeight:'bold'}}>{ActionName}</p>
        </div>
    </>
  )
}
