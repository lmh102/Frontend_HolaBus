import React, { useEffect, useState } from "react";
import { useCallback } from "react";

export default function UserManagement() {
  const [listUser, setListUser] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = "Bearer " + token;
    useEffect(() => {
    console.log(Authorization);

    const requestOptions = {
      method: "GET",
      headers: {
        "Authorization": Authorization,
         "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
      },
    };

    fetch(
      "/api/user/allUsers",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        // setListUser(data.map((e) => { return {
        //     ID: e.id,
        //     Fullname: e.fullName,
        //     Email: e.email,
        //     Phone: e.phoneNumber,
        //     Department: e.department.departmentName
        // }}));
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
    
  var index = 1;

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");

  const handleFullname = (e) => {
    setFullname(e);
  };

  const handleEmail = (e) => {
    setEmail(e);
  };

  const handlePhone = (e) => {
    setPhone(e);
  };

  const handleDeparment = (e) => {
    setDepartment(e);
  };

  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    var mess = "";
    var patternPhone = /^\d{10,11}$/;
    if (!email.includes("@fpt.edu.vn")) {
      mess = "You should use fpt email!\n";
    } else if (!patternPhone.test(phone)) {
      mess += "Phone number should be 10 or 11 digits\n";
    }

    if (mess !== "") {
      e.preventDefault();
      setMessage(mess);
    }
  };
  return (
    <div className="container-fluid">
      <div className="text-center text-warning fs-3 fw-bold mb-4">
        User Management
      </div>
      <div className="col-12 d-flex">
        <div className="col-3" style={{ borderRight: "2px dashed #FF8C00" }}>
          <form>
            <div className="card card col-11">
              <div className="card-header fw-bold bg-warning">Add New User</div>
              <div className="card-body">
                <InputData
                  label="Fullname"
                  type="text"
                  name="fullname"
                  value={fullname}
                  onChange={handleFullname}
                ></InputData>
                <InputData
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                ></InputData>
                <InputData
                  label="Phone number"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handlePhone}
                ></InputData>
                <InputData
                  label="Department"
                  type="text"
                  name="department"
                  value={department}
                  onChange={handleDeparment}
                ></InputData>

                <div className="mt-3">{message}</div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-warning mt-4 w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-9 px-4">
          <table className="table table-bordered">
            <thead>
              <tr className="bg-warning">
                <th>Index</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((e) => {
                return (
                  <tr key={index++}>
                    <td>{index}</td>
                    <td>{e.Fullname}</td>
                    <td>{e.Email}</td>
                    <td>{e.Phone}</td>
                    <td>{e.Department}</td>
                    <td>
                      <div className="btn btn-danger">Block</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const InputData = (props) => (
  <div className=" mt-2">
    <div className="">
      <div className="">
        <label className="">{props.label}</label>
      </div>
      <div className="">
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          required
        />
      </div>
    </div>
  </div>
);
