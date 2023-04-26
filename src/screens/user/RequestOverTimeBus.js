import React, {useState} from 'react';

export default function RequestOverTimeBus() {
  // phone
  const [phone, setPhone] = useState('');
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  // date
  const [startDate, setStartDate] = useState(getToday());
  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  }

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

  // building location
  const [building, setBuilding] = useState(
    [
      {
        id: 1,
        title: "Fville-1"
      },
      {
        id: 2,
        title: "Fville-2"
      }
    ]
  )

  const [busRoute, setBusRoute] = useState(
    [
      {
        id: 1,
        title: "OT Cầu Giấy 19h30"
      },
      {
        id: 2,
        title: "OT Hà Đông 21h"
      }
    ]
  )

  const [purpose, setPurpose] = useState(
    [
      {
        id: 1,
        title: "OT"
      },
      {
        id: 2,
        title: "Thể Thao"
      }
    ]
  )

  const [buildingValue, setBuildingValue] = useState(-1);
  const handleBuildingValue = (e) => {
    setBuildingValue(e.target.value);
  }

  const [busRouteValue, setBusRouteValue] = useState(-1);
  const handleBusRouteValue = (e) => {
    setBusRouteValue(e.target.value);
  }

  const [purposeValue, setPurposeValue] = useState(-1);
  const handlePurposeValue = (e) => {
    setPurposeValue(e.target.value);
  }

  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    var mess = '';
    if(buildingValue === -1){
      mess = "You should choose a building location!\n";
    }

    if(busRouteValue === -1) {
      mess += "You should choose a bus route";
    }

    if(purposeValue === -1){
      mess += "You should choose a purpose!"
    }

    if(startDate === null){
      mess += "You should pick a date!";
    }

    var patternPhone = /^\d{10,11}$/;
    if(patternPhone.test(phone.trim()) === false){
      mess += "Phone number should be digits!";
    }

    if(mess !== ''){
      e.preventDefault();
      setMessage(mess);
    }
  }
  return (
    <div className="container mt-5 mb-5">
      <div className="col-md-12 d-flex justify-content-center">
        <div className="col-md-8 box-card bg-light">
          <form onSubmit={handleSubmit}>
            <div className="text-center text-light bg-warning pt-3 pb-3 fs-4">
              Book Overtime Bus
            </div>
            <div className='text-danger text-center'>{message}</div>


            <div id='main-content'>
              <InputForm type='date' label='Date *' name='Date' id='Date' value={startDate}/>

              <Selection label='Building location *' name='buildingLocation' optionDefault='Select a location' option={building} onChange={handleBuildingValue}/>

              <div className='d-flex mt-4'>
                <div className='col-md-4'>
                  <div className='mx-4'>Book Multiple Account</div>
                </div>
                <div className='col-md-8 mx-4'>
                  <input type='checkbox' name='multipleAccount' />
                </div>
              </div>

              <Selection label='Bus Route *' name='busRoute' optionDefault='Select a bus route' option={busRoute} onChange={handleBusRouteValue}/>

              <Selection label='Purpose *' name='purpose' optionDefault='Select your perpose' option={purpose} onChange={handlePurposeValue}/>

              <InputForm type='text' label='Phone number *' name='phoneNumber' id='phone' value={phone} onChange={handlePhoneChange}/>
            </div>

            <div className='justify-content-end px-4 d-flex mt-4 mb-4'>
              <input type='submit' value='Register' className='btn btn-warning' id='register' />
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

const InputForm = props => (
  <div className='d-flex mt-4'>
    <div className='col-md-4'>
      <label className='mx-4'>{props.label}</label>
    </div>
    <div className='col-md-8 px-4'>
      <input type={props.type} id={props.id} className='form-control w-50' name={props.name} value={props.value} onChange={props.onChange} />
    </div>
  </div>
)