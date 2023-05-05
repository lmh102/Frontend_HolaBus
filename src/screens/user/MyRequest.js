import React, {useState} from 'react';
import * as Icon from "react-icons/fa";

export default function MyRequest() {
  const [listRequest, setListRequest] = useState(
    [
      {
        ID: 1,
        BusRoute: "Làng Việt Kiều (Hà Đông)",
        Created: "10/01/2023",
        Requester: "",
        Project: "",
        PickupLocation: "Điện máy Trần Anh - BigC Hà Đông",
        StartTime: "07h37",
        BusNumber: "5.2 - Tuyến 5 xe 2", 
        StartDate: "11/01/2023",
        Endate: "30/06/2023",
        RequestStatus: "Approved",
        Status: "active"
      },
      {
        ID: 2,
        BusRoute: "Làng Việt Kiều (Hà Đông)",
        Created: "10/01/2023",
        Requester: "",
        Project: "",
        PickupLocation: "Điện máy Trần Anh - BigC Hà Đông",
        StartTime: "07h37",
        BusNumber: "5.2 - Tuyến 5 xe 2", 
        StartDate: "11/01/2023",
        Endate: "30/06/2023",
        RequestStatus: "In Progress",
        Status: "active"
      }
    ]
  )

  function getToday() {
    const todayDate = new Date();
    const dd = todayDate.getDate();
    const mm = todayDate.getMonth() + 1;
    var DD = "";
    if(dd < 10) {
      DD = "0" + dd;
    }
    var MM = "";
    if (mm < 10) {
      MM = "0" + mm;
    }
    else {
      MM = mm + "";
    }
    const yy = todayDate.getFullYear();
    console.log(yy + "-" + MM + "-" + DD);
    return (yy + "-" + MM + "-" + DD);
  }

  // date
  const [startDate, setStartDate] = useState(getToday());
  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  }

  var count = 1;
  return (
    <div className='container-fluid bg-light'>
      <div className=''>
        <div className='fw-bold mt-1 mb-2'>My Request</div>

        <div className='d-flex mb-3'>
          <div className='col-2'>
            <select className='form-control'>
              <option>Choose Bus Route</option>
            </select>
          </div>
          <div className='col-2 mx-4'>
            <input type='date' name='date' className='form-control' value={startDate} onChange={handleDateChange}/>
          </div>
          <div className='col-2'>
            <select className='form-select'>
              <option>Use Bus In Office House</option>
            </select>
          </div>
          <div className='col-2 mx-4'>
            <select className='form-control'>
              <option>Reuqest Status</option>
              <option>In Progress</option>
              <option>Approved</option>
            </select>
          </div>

          <div className='col-2'>
            <button className='btn btn-secondary'>
              <Icon.FaSistrix />
            </button>
          </div>
        </div>

        <table className='table'>
          <thead>
            <tr className='bg-warning'>
              <th>No</th>
              <th>Bus Route</th>
              <th>Created</th>
              <th>Requester</th>
              <th>Project</th>
              <th>Pickup Location</th>
              <th>Bus Number</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Request Status</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div className=''>
                <select className='' style={{outline: "none", border: "none", backgroundColor: "none"}}>
                  <option>Bus Route</option>
                </select>
              </div>
            </tr>
              {
                listRequest.map((e) => { 
                  return <tr key={count++} className='bg-info'>
                    <td>{count}</td>
                    <td>{e.BusRoute}</td>
                    <td>{e.Created}</td>
                    <td>{e.Requester}</td>
                    <td>{e.Project}</td>
                    <td>{e.PickupLocation}</td>
                    <td>
                      <a href='' className='text-warning'>{e.BusNumber}</a>
                    </td>
                    <td>{e.StartDate}</td>
                    <td>{e.Endate}</td>
                    <td>
                      <div className='text-success'>{e.RequestStatus}</div>
                    </td>
                    <td>{e.Status}</td>
                    <td>
                      <div className='d-flex'>
                        <div>
                        <Icon.FaMinusCircle />
                        </div>
                        <div className='mx-3 text-danger'>
                        <Icon.FaRegEye />
                        </div>
                      </div>
                    </td>
                  </tr>

                })
              }
          </tbody>
        </table>
      </div>

    </div>
  )
}
