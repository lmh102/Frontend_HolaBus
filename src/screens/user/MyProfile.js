import React , { useState } from 'react';

export default function MyProfile() {
  const [name,setName] =useState('');
  const [email,setMail] =useState('');
  const [phone,setPhone] =useState('');
  const [depart,setDepartment] =useState('');
  return (
    <div className="container mt-5 mb-5" style={{height:"56.67vh"}}>
    <div className="col-md-12 d-flex justify-content-center">
      <div className="col-md-8 box-card bg-light">
        <form >
          <div className="text-center text-light pt-3 pb-3 fs-4" style={{backgroundColor:"#ff7921"}}>
            USER INFORMATION 
          </div>
          <div className='text-danger text-center'>{}</div>
          <div className='d-flex mt-4'>
            <div className='col-md-4'>
            </div>
            <div className='col-md-8 d-flex justify-content-around pr-4'>    
            </div>
          </div>
          <div id='main-content'>
            

            <ViewInfo label='Full name' name='' value={setName} />
            <ViewInfo label='Email' name='' value={setMail} />
            <ViewInfo label='Phone number' name='' value={setPhone} />
            <ViewInfo label='Department' name='' value={setDepartment} />

               </div>

          <div className='justify-content-end px-4 d-flex mt-4 mb-4'>
          </div>
        </form>
      </div>
    </div>
  </div>
)

  
}
const ViewInfo = props => (
  <div className='d-flex mt-4'>
    <div className='col-md-4'>
      <label className='mx-4'>{props.label}</label>
    </div>
    <div className='col-md-8 px-4'>
      <input type='text' className='form-control' name={props.name} value={props.value} readOnly />
    </div>
  </div>
)