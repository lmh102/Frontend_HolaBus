import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import GoogleMapApp from '../../components/GoogleMap';

function BusRouteInformation(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <div className='text-primary' style={{ cursor: "pointer" }} onClick={handleShow}>{props.BusRoute}</div>

      <Modal show={show} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Bus Route Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='col-md-12'>
            <label>Bus Route</label>
            <div className='d-flex justify-content-center'>
              <input type='text' value={props.BusRoute} readOnly className='form-control bg-light mx-3' />
            </div>
          </div>
          <div className='col-md-12 mt-2'>
            <label>Bus Type</label>
            <div className='d-flex justify-content-center'>
              <input type='text' value={props.BusType} readOnly className='form-control bg-light mx-3' />
            </div>
          </div>
          <div className='col-md-12 mt-2'>
            <label>Route Group</label>
            <div className='d-flex justify-content-center'>
              <input type='text' value={props.RouteGroup} readOnly className='form-control bg-light mx-3' />
            </div>

          </div>
          <div className='col-md-12 d-flex mt-2'>
            <div className='col-md-6'>
              <label>Pickup Location</label>
              <div className='d-flex justify-content-center'>
                <input type='text' value={props.PickupLocation} readOnly className='form-control bg-light mx-3' />
              </div>
            </div>
            <div className='col-md-6'>
              <br></br>
              <div className='d-flex justify-content-center'>
                <input type='text' value={props.StartTime} readOnly className='form-control bg-light mx-3' />
              </div>
            </div>
          </div>

          <div className='col-md-12 d-flex mt-2'>
            <div className='col-md-6'>
              <label>Destination</label>
              <div className='d-flex justify-content-center'>
                <input type='text' value={props.Destination} readOnly className='form-control bg-light mx-3' />
              </div>
            </div>
            <div className='col-md-6'>
              <br></br>
              <div className='d-flex justify-content-center'>
                <input type='text' value={props.DestinationTime} readOnly className='form-control bg-light mx-3' />
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div className='text-primary mx-3 text-start'>If you can not see the map, please presse Ctr+F5</div>
          </div>
          <div className='col-md-12'>
          <GoogleMapApp addressPoint={props.BusRoute}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BusRouteInformation;