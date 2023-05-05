import React, { useState } from "react";
import * as Icon from "react-icons/fa";

export default function RequestManagement() {

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
                RequestStatus: "In Progress",
                Status: "active"
            }
        ]
    )

    // const myList = listRequest.map((e) => {
    //   if(e.RequestStatus !== "Approved") return e;
    // })
    
    // setListRequest(myList);
    var count = 1;

    const handleStatus = (ID) => {
      // var listFilter = listRequest.map((e) => {
      //   if(e.ID === ID){
      //     return {...e, RequestStatus: "Approved"};
      //   }
      //   return e;
      // });
      // setListRequest(listFilter);
    } 

    return (
        <div className="container-fluid">
            <div className="text-center text-warning fw-bold fs-3 mt-1 mb-4">Request Management</div>
            <table className="table table-bordered">
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
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
                    {/* <td>
                      <div className='text-success'>{e.RequestStatus}</div>
                    </td> */}
                    {/* <td>{e.Status}</td> */}
                    <td>
                      <div className='d-flex'>
                        {/* <div>
                        <Icon.FaMinusCircle />
                        </div>
                        <div className='mx-3 text-danger'>
                        <Icon.FaRegEye />
                        </div> */}
                        <div className="btn btn-success" onClick={handleStatus(e.ID)}>Accept</div>
                      </div>
                    </td>
                  </tr>

                })
              }
                </tbody>
            </table>
        </div>
    )
}
