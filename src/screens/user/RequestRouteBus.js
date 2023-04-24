import React, {useState} from 'react';
import "../css/RequestRouteBus.css";

export default function RequestRouteBus() {
  const [pickupLocation, setPickupLocation] = useState([
    {
      id: "1",
      title: "Điện máy Trần Anh - BigC Hà Đông"
    },
    {
      id: "2",
      title: "Mỹ Đình"
    }
  ]);
  // console.log(pickupLocation);
  return (
    <div className="container mt-5 mb-5">
      <div className="col-md-12 d-flex justify-content-center">
        <div className="col-md-8 box-card bg-light">
          <form>
            <div className="text-center text-light bg-warning pt-3 pb-3 fs-4">
              Book Route Bus
            </div>

            <div className='d-flex mt-4'>
              <div className='col-md-4'>
                <div className='mx-4'>Use Bus</div>
              </div>
              <div className='col-md-8 d-flex justify-content-around pr-4'>
                <div>
                  <input type='radio' name='useBus' id='useBusYes' />
                  <label htmlFor='useBusYes'>Yes</label>
                </div>
                <div>
                  <input type='radio' name='useBus' id='useBusNo' />
                  <label htmlFor='useBusNo'>No</label>
                </div>
              </div>
            </div>

            <Selection label='Pickup location *' name='pickupLocation' option={pickupLocation} optionDefault='Select a location'/>

            <Selection label='Choose bus number *' name='busLocation' option={pickupLocation} optionDefault='Select a bus number'/>

            <ViewInfo label='Bus Route' name='busRoute' value='Bus Route' />

            <ViewInfo label='Route Group' name='routeGroup' value='Tuyến 5' />

            <ViewInfo label='Return time' name='returnTime' value='Bus Route' />

            <ViewInfo label='Bus Scretary' name='busScetary' value='Bus Route' />

            <ViewInfo label='Bus Scretary Phone' name='busScetaryPhone' value='Bus Route' />

            <ViewInfo label='List Location 1' name='ListLocation' value='Bus Route' />

            <ViewInfo label='List Location 2' name='busRoute' value='Bus Route' />

            <ViewInfo label='Destination' name='busRoute' value='Bus Route' />

            <InputForm type='date' label='Start Date *' name='startDate' />

            <InputForm type='text' label='Phone number *' name='phoneNumber' />

            <div className='justify-content-end px-4 d-flex mt-4 mb-4'>
              <input type='submit' value='Register' className='btn btn-warning' />
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
      <select name={props.name} className='form-control'>
        <option value='-1'>{props.optionDefault}</option>
        <Option option={props.option}/>
      </select>
    </div>
  </div>
)

function Option(props){
  var myOption = props.option.map((e) => {
    <option value={e.id}>{e.title}</option>
  })

  console.log(myOption.value); // có vấn đề ở đây 
  return myOption;
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

const InputForm = props => (
  <div className='d-flex mt-4'>
    <div className='col-md-4'>
      <label className='mx-4'>{props.label}</label>
    </div>
    <div className='col-md-8 px-4'>
      <input type={props.type} className='form-control w-50' name={props.name} value={props.value} />
    </div>
  </div>
)