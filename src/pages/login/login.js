import {useState} from "react";
import "./login.css";
import PropTypes from "prop-types";
const axios = require('axios');


const baseURL = "http://localhost:5500";

async function loginUser(data){
  
    const response = await axios.post(baseURL+'/api/auth/login', JSON.stringify(data));
    console.log('response  ', response)
    return response.data;
  
}

// async function loginUser(credentials) {
 
//   const response = fetch('http://localhost:5500/api/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//   .then(data =>  data.json())
  
//   console.log(response.message);

//   return response;
//  }

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if(!!response){
      setToken(response.token);
    }
    
  }

  return (
    <>
      <div className="limiter">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form validate-form" onSubmit={handleSubmit}>
              <div className="login-logo">
                <img src="./assets/images/mypay-logo.png" alt="MyPay logo" />
              </div>

              <div className="login-heading">
                <h3 className="login-form-title">Login</h3>
                <p>Welcome! Log in to your MyPay account</p>
              </div>

              <div className="validation_error"></div>

              <div
                className="wrap-input"
              >
                <input
                  className="input form-control"
                  type="text"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />

                {/* <small className="err_msg">Please enter valid username.</small> */}
              </div>

              <div
                className="wrap-input"
              >
                <input
                  className="input form-control"
                  type="password"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                />

                {/* <small className="err_msg">Please enter valid password.</small> */}
              </div>

              <div className="form-check remember_me_wrap">
                <input
                  type="checkbox"
                  id="remember_me"
                  className="form-check-input"
                />
                <label htmlFor="remember_me" className="form-check-label">
                  Remember Me
                </label>
              </div>

              <div className="container-login-form-btn">
                <div className="wrap-login-form-btn">
                  <div className="login-form-bgbtn"></div>
                  <button className="login-form-btn">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;
