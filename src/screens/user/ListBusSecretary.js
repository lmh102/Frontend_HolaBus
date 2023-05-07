import React, {useState} from 'react'

export default function ListBusSecretary() {
  const [listBusSecretary, setListBusSecreatry] = useState(
    [
      {
        ID: 1,
        BusNumber: "1.1",
        BusRoute: "Công viên Thôngs Nhất",
        Secretary: "Nguyen Van A",
        Phone: "0961973785"
      },
      {
        ID: 2,
        BusNumber: "1.2",
        BusRoute: "BigC Hà Đông",
        Secretary: "Tran Manh Nhan",
        Phone: "0349552576"
      },
      {
        ID: 3,
        BusNumber: "5.2",
        BusRoute: "Tây Hồ",
        Secretary: "Lê Công Vinh",
        Phone: "0123456789"
      }
    ]
  )

  var count = 1;
  return (
    <div className='container-fluid'>
      <div className='text-center text-warning fs-4 fw-bold'>List Bus Secretary</div>
      <div className='mt-5'>
        <table className='table table-bordered'>
          <thead>
            <tr className='bg-warning'>
              <th>Index</th>
              <th>Bus Number</th>
              <th>Bus Route</th>
              <th>Secretary</th>
              <th>Secretary Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              listBusSecretary.map((e) => {
                return (
                  <tr key={count++}>
                    <td>{count}</td>
                    <td>{e.BusNumber}</td>
                    <td>{e.BusRoute}</td>
                    <td>{e.Secretary}</td>
                    <td>{e.Phone}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
