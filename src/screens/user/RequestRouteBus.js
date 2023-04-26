import React, { useState } from 'react';
import "../css/RequestRouteBus.css";

export default function RequestRouteBus() {
  const [message, setMessage] = useState('');
  const [pickupLocation, setPickupLocation] = useState([
    {
      id: 1,
      title: "Điện máy Trần Anh - BigC Hà Đông"
    },
    {
      id: 2,
      title: "Mỹ Đình"
    }
  ]);
  const [pickupLocationValue, setPickupLocationValue] = useState(-1);

  const [busNumber, setBusNumber] = useState([
    {
      id: 1,
      title: "5.1"
    }, 
    {
      id: 2,
      title: "5.2"
    }
  ])

  const [busNumberValue, setBusNumberValue] = useState(-1);
  function getToday() {
    const todayDate = new Date();
    const dd = todayDate.getDate();
    const mm = todayDate.getMonth() + 1;
    var MM = "";
    if (mm < 10) {
      MM = "0" + mm;
    }
    else {
      MM = mm + "";
    }
    const yy = todayDate.getFullYear();

    return (yy + "-" + MM + "-" + dd);
  }
  const [startDate, setStartDate] = useState(getToday());
  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  }

  const [phone, setPhone] = useState('');
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const useBusCheck = (e) => {
    var checkYes = document.getElementById('useBusYes');
    var checkNo = document.getElementById('useBusNo');
    var main = document.getElementById('main-content');
    var register = document.getElementById('register');
    var exit = document.getElementById('exit');
    console.log(checkYes.checked ? "Check Yes" : "Uncheck Yes");
    console.log('check no: ' + checkNo.checked ? "Check No" : "Uncheck No");

    if (checkNo.checked) {
      main.classList.remove('d-block');
      register.classList.remove('d-block');
      exit.classList.remove('d-none');

      main.classList.add('d-none');
      register.classList.add('d-none');
      exit.classList.add('d-block');
    }
    else if (checkYes.checked) {
      main.classList.remove('d-none');
      exit.classList.remove('d-block');
      register.classList.remove('d-none');

      main.classList.add('d-block');
      register.classList.add("d-block");
      exit.classList.add('d-none');
    }
  }
  const handlePickupLocation = (e) => {
    setPickupLocationValue(e.target.value);
  }

  const handleBusNumberChange = (e) => {
    setBusNumberValue(e.target.value);
  }
  const handleSubmit = (e) => {
    var mess = '';
    if(pickupLocationValue === -1){
      mess = "You should choose pickup location!";
    }

    if(busNumberValue === -1){
      mess += '\n' + "You should choose bus number!";
    }

    if(startDate === null){
      mess += "\n" + "You should pick a start date!"
    }

    
    var patternPhone = /^\d{10,11}$/;
    if(patternPhone.test(phone.trim()) === false){
      mess += "Phone number should be digits!";
    }

    if(mess !== ''){
      setMessage(mess);
      e.preventDefault();
    }
  }
  return (
    <div className="container mt-5 mb-5">
      <div className="col-md-12 d-flex justify-content-center">
        <div className="col-md-8 box-card bg-light">
          <form onSubmit={handleSubmit}>
            <div className="text-center text-light bg-warning pt-3 pb-3 fs-4">
              Book Route Bus
            </div>
            <div className='text-danger text-center'>{message}</div>
            <div className='d-flex mt-4'>
              <div className='col-md-4'>
                <div className='mx-4'>Use Bus</div>
              </div>
              <div className='col-md-8 d-flex justify-content-around pr-4'>
                <div>
                  <input type='radio' name='useBus' id='useBusYes' value='Yes' onClick={useBusCheck} defaultChecked />
                  <label htmlFor='useBusYes'>Yes</label>
                </div>
                <div>
                  <input type='radio' name='useBus' id='useBusNo' value='No' onClick={useBusCheck} />
                  <label htmlFor='useBusNo'>No</label>
                </div>
              </div>
            </div>

            <div id='main-content'>
              <Selection label='Pickup location *' name='pickupLocation' option={pickupLocation} optionDefault='Select a location' onChange={handlePickupLocation}/>

              <Selection label='Choose bus number *' name='busLocation' option={busNumber} optionDefault='Select a bus number' onChange={handleBusNumberChange}/>

              <ViewInfo label='Bus Route' name='busRoute' value='Bus Route' />

              <ViewInfo label='Route Group' name='routeGroup' value='Tuyến 5' />

              <ViewInfo label='Return time' name='returnTime' value='Bus Route' />

              <ViewInfo label='Bus Scretary' name='busScetary' value='Bus Route' />

              <ViewInfo label='Bus Scretary Phone' name='busScetaryPhone' value='Bus Route' />

              <ViewInfo label='List Location 1' name='ListLocation' value='Bus Route' />

              <ViewInfo label='List Location 2' name='busRoute' value='Bus Route' />

              <ViewInfo label='Destination' name='busRoute' value='Bus Route' />

              <InputForm type='date' label='Start Date *' name='startDate' value={startDate} onChange={handleDateChange} id='startDate'/>

              <InputForm type='text' label='Phone number *' name='phoneNumber' id='phone' onChange={handlePhoneChange}/>
            </div>

            <div className='justify-content-end px-4 d-flex mt-4 mb-4'>
              <input type='submit' value='Register' className='btn btn-warning' id='register' />
              <a value='Exit' className='btn btn-warning d-none' id='exit' href='/'>Exit</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}


const Selection = props => (
  <div className='d-flex mt-4'>
    <div className='col-md-4'>
      <label className='mx-4'>{props.label}</label>
    </div>
    <div className='col-md-8 px-4'>
      <select name={props.name} className='form-select' onChange={props.onChange}>
        <option value='-1'>{props.optionDefault}</option>
        {
          props.option.map((e) => {
            return <option key={e.id} value={e.id}>{e.title}</option>
          })
        }
      </select>
    </div>
  </div>
)

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

const InputForm = props => (
  <div className='d-flex mt-4'>
    <div className='col-md-4'>
      <label className='mx-4'>{props.label}</label>
    </div>
    <div className='col-md-8 px-4'>
      <input type={props.type} id={props.id} className='form-control w-50' name={props.name} value={props.value} onChange={props.onChange}/>
    </div>
  </div>
)