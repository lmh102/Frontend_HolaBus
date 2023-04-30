import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function MyRequest() {
  return (
    <div className="container-fluid">
      <div className="header">
        <h3
          style={{
            color: "#f27328",
            fontSize: "25px",
            fontWeight: "bold",
            margin: "20px 0 20px 10px",
          }}
        >
          My Requests
        </h3>
      </div>
      <div className="toolbar" style={{display:"flex",margin:"5px 5px 5px 0px"}}>
          <InputGroup style={{width:"20vw",marginLeft:"10px"}}>
          <Form.Control placeholder="Select Bus Route"/>
          </InputGroup>
          <InputGroup style={{width:"20vw",marginLeft:"10px"}}>
          <Form.Control placeholder="Select Bus Route"/>
          </InputGroup>
          <InputGroup style={{width:"20vw",marginLeft:"10px"}}>
          <Form.Control placeholder="Select Bus Route"/>
          </InputGroup>
          <InputGroup style={{width:"20vw",marginLeft:"10px"}}>
          <Form.Control placeholder="Select Bus Route"/>
          </InputGroup>
          
      </div>
    </div>
  );
}
