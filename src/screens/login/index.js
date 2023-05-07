import React, { useEffect, useState} from "react";
import {  useNavigate } from "react-router-dom";

import "./index.css";

const LoginForm = () => {
  useEffect(() => {
          localStorage.setItem("role",JSON.stringify(""));
          localStorage.setItem("token",JSON.stringify(""));},[])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    const requestOptions = {
        method: "POST",
        body: JSON.stringify({"email": email,"password": password}),
        headers: {'Content-Type': 'application/json'},
        
    };

     fetch('https://cold-shrimps-report.loca.lt/api/public/login', requestOptions)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("role",JSON.stringify(data.role));
          localStorage.setItem("token",JSON.stringify(data.token));
          if(data.role == "ROLE_ADMIN") navigate("/admin");
          else navigate("/");
        })
        .catch(err => {
      console.log(err);
    });

  }

  const emailChange = (e) => {
    const data = e.target.value;
    setEmail(data);
  }

  const passwordChange = (e) => {
    const data = e.target.value;
    setPassword(data);
  }

  const validate = (email, password) => {
    // console.log(typeof(email));
    var valid = true;
    var err = "";
    // if(!email.includes('@fpt.edu.vn')){
    //   err = "You should use @fpt.edu.vn email!";
    //   valid = false;
    // }
    if(password.length < 6){
      err = err.concat("\n", "Password must be more than 5 characters!");
      valid = false;
    }
    if(!valid){
      setMessage(err);
    }
    return valid;
  }
  return (
    <div id='loginBody'>
      <br></br>
      <br></br>
      <br></br>
      <div id="loginform">
        <FormHeader title="Login" />
          <div className="text-center text-danger">{message}</div>
          <div id='message'></div>
          <div className="row">
            <label>Email</label>
            <input type="email" name='email' placeholder="Enter your email" id="email"  required onChange={emailChange}/>
          </div>
          <div className="row">
            <label>Password</label>
            <input type="password" name='password' placeholder="Enter your password" id="password"  required onChange={passwordChange}/>
          </div>
          <div id="button" className="row">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        <OtherMethods />
      </div>
    </div>
  )
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <button className='d-flex' id='login-google'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'></img>
      <div id='btn-title'>FPT.EDU.VN</div>
    </button>
  </div>
);

export default LoginForm