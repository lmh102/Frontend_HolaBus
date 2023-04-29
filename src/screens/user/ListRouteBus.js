import React, {useState} from 'react';
import { IconContext } from 'react-icons';
import * as Icon from "react-icons/fa";
import BusRouteInformation from './BusRouteInformation';

export default function ListRouteBus() {
    const [listRouteBus, setListRouteBus] = useState(
        [
            {
                ID: 1,
                RouteGroup: "Tuyến 1",
                BusRoute: "Lạc Long Quân (Tây Hồ)",
                BusType: "ROUTE_BUS",
                BusName: ["1.1"],
                StartTime: "07h30",
                PickupLocation: "Trước cổng công ty khai thác cá Hồ Tây - ngõ 612 Lạc Long Quân",
                ReturnTime: "17h30",
                ParkingAddress: "Trước sân công ty khai thác cá Hồ Tây",
                Destination: "Fville 1/Fville 2 - Hòa Lạc",
                DestinationTime: "8h30",
                ParkingFee: 10000
            },
            {
                ID: 2,
                RouteGroup: "Tuyến 1",
                BusRoute: "Công viên Hòa Bình(Bắc Từ Liêm)",
                BusType: "ROUTE_BUS",
                BusName: ["1.4", "1.3", "1.7"],
                StartTime: "07h40",
                PickupLocation: "Công viên Hòa Bình",
                ReturnTime: "17h30",
                ParkingAddress: "Bãi gửi xe Công viên Hòa Bình",
                Destination: "Fville 1/Fville 2 - Hòa Lạc",
                DestinationTime: "8h40",
                ParkingFee: 5000
            },
            {
                ID: 3,
                RouteGroup: "Tuyến 2",
                BusRoute: "Thủ Lệ (Ba Đình)",
                BusType: "ROUTE_BUS",
                BusName: ["2.1"],
                StartTime: "07h45",
                PickupLocation: "Công viên Thủ Lệ",
                ReturnTime: "17h30",
                ParkingAddress: "Bãi gửi xe cổng công viên",
                Destination: "Fville 1/Fville 2 - Hòa Lạc",
                DestinationTime: "8h45",
                ParkingFee: 5000
            },
            {
                ID: 4,
                RouteGroup: "Tuyến 2",
                BusRoute: "Thủ Lệ (Ba Đình)",
                BusType: "ROUTE_BUS",
                BusName: ["2.2"],
                StartTime: "07h45",
                PickupLocation: "Công viên Thủ Lệ",
                ReturnTime: "17h30",
                ParkingAddress: "Bãi gửi xe cổng công viên",
                Destination: "Fville 1/Fville 2 - Hòa Lạc",
                DestinationTime: "8h30",
                ParkingFee: 5000
            }
        ]
    );

    const openModal = (e) => {
        <BusRouteInformation />
    }
    // var group = "";

    return (
        <div className="container-fluid m-0 p-0">
            <div className="col-md-12 d-flex justify-content-center">
                <div className='justify-content-center pt-3 pb-3 bg-light w-100 d-flex align-item-center'>
                    <div><Icon.FaBus /></div> <div className='fw-bold mx-3'>List Route Bus </div>
                </div>
            </div>

            <div className='mx-4'>
                <div className='d-flex justify-content-end mt-3 mb-3'>
                    <form>
                        <button className='btn btn-outline-dark d-flex text-center'> <div><Icon.FaFileExcel /></div><div className='mx-2'>Export</div></button>
                    </form>
                </div>
                <table className='table table-bordered'>
                <thead>
                    <tr className='bg-warning'>
                        <th>Route Group</th>
                        <th>Bus Route</th>
                        <th>Bus Name</th>
                        <th>Route Detail</th>
                        <th>Return time</th>
                        <th>Pickup Location</th>
                        <th>Parking address</th>
                        <th>Parking Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listRouteBus.map((e) => {
                            return <tr>
                            <td>{e.RouteGroup}</td>
                            <td>
                                {/* <div className='text-primary' style={{cursor: "pointer"}}>{e.BusRoute}</div> */}
                                <BusRouteInformation BusRoute={e.BusRoute} BusType={e.BusType} RouteGroup={e.RouteGroup} PickupLocation={e.PickupLocation} StartTime={e.StartTime} Destination={e.Destination} DestinationTime={e.DestinationTime}/>
                            </td>
                            <td>{e.BusName.toString()}</td>
                            <td>
                                <div className='d-flex'>
                                    <div className='fw-bold text-danger'>{e.StartTime}</div>
                                    <div>{e.PickupLocation}</div>
                                </div>
                            </td>
                            <td>{e.ReturnTime}</td>
                            <td>
                            <div className='d-flex'>
                                    <div className='fw-bold text-danger'>{e.StartTime}</div>
                                    <div>{e.PickupLocation}</div>
                                </div>
                            </td>
                            <td>{e.ParkingAddress}</td>
                            <td>{e.ParkingFee}</td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}
