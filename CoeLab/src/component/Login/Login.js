import React, { useState } from "react";
import "./Login.css"
import { Link,useNavigate } from "react-router-dom/dist";

function LoginPage() {

  const navigate = useNavigate()

  const [data, setData] = useState({});
  const [error, setError] = useState({});
  // primary variable ,value ko store karna hae,secondary variable , value ko update karta hae

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleValidate = (value) => {
let error={};
if(!value.email){
  error.email= "email required";
}
else if(!value.password){
  error.password="password required";
}
else if(!value.confirmpassword){
  error.confirmpassword="confirm password required";
}else{
loginapi(value)
}
setError(error);
  };
  const loginapi=(value)=>{
    
    if(value.email ==="abhishek@gmail.com" && value.password === 123){
      alert("Login Successfully")
      navigate("/admin-panel")
    }else{
      alert("Invalid credential")
      navigate("/signup")
    }
  }

  const handleClick = () => {
    handleValidate(data)
  };

  return (

    <>
      {/* <h1>I am login page.</h1>? */}
      <div class="container">
        <div class="row">
          <div class="col col-md-3">
            {/* One of three columns */}
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-header">
                Login
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" onChange={handleChange} />
                <p>{error.email}</p>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Password</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your password" name="password" onChange={handleChange} />
                  <p>{error.password}</p>
                  </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">confirm password</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your confirm password" name="confirmpassword" onChange={handleChange} />
                  <p>{error.confirmpassword}</p>
                  </div>
                <div class="login-btn">
                  <button type="button" class="btn btn-success" onClick={handleClick}>Success</button>
                </div>
                <Link to="/signup">Have not an account? SignUp</Link>
              </div>
            </div>
          </div>
          <div class="col col-md-3">
            {/* One of three columns */}
          </div>
        </div>
      </div>

    </>
  );
}

export default LoginPage;